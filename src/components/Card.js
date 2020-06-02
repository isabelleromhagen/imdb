import React, {Component} from 'react';
import '../styling/App.css';
import Button from './Button';
import imdbData from '../data/imdb.json';



class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actorsList: this.props.top5,
            random5: this.props.random5
        };

        this.handleDelete = this.handleDelete.bind(this);
        this.handleOption = this.handleOption.bind(this);
        this.handleRandomActor = this.handleRandomActor.bind(this);
        this.handleSortedName = this.handleSortedName.bind(this);
        this.handleSortedPop = this.handleSortedPop.bind(this);
  };

  handleDelete(e) {
      let actorName = e.target.value;
      let newActorList = this.state.actorsList.filter(x => x.name !== actorName);
      this.setState({
          actorsList: newActorList
      });
  }

  handleOption(e) {
    
      if(e.target.value === "Add random contact") {
          this.handleRandomActor();
          
      }
      if(e.target.value === "Sorted by Name") {
          this.handleSortedName();
        
      }
      if(e.target.value === "Sorted by popularity") {
          this.handleSortedPop();
      }
  }

  randomActor = () => {
    return imdbData[Math.floor(Math.random()* imdbData.length)];
  }

  handleRandomActor() {
    let newRandom = [this.randomActor(), this.randomActor(), this.randomActor(), this.randomActor(), this.randomActor()];
      this.setState({
          actorsList: newRandom
      });
      return;
  }

  handleSortedName() {
    let sortedName = this.state.actorsList.sort((a,b) => a.name.localeCompare(b.name));
    this.setState({
        actorsList: sortedName
    });
  }

  handleSortedPop() {
  
    let sortedPop = this.state.actorsList.sort((a,b) => b.popularity - a.popularity);
    console.log(sortedPop);
    this.setState({
        actorsList: sortedPop
    });
  }
    
    render() {
        return (
            <div>
                <div>
                    {this.props.btnTexts.map((elem) => {
                        return(
                        <Button className="optionBtn" btnText={elem} isClicked={this.handleOption} btnKey={elem}></Button>
                        );
                    })}
                </div>
                <table>
                    <thead>
                        <tr>
                            {
                                this.props.tableHeads.map((tableHead) => <TableHead key={tableHead} tableHead={tableHead}/>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.actorsList.map((elem) => {
                            return (
                                <tr>
                                    <td> <img src={elem.pictureUrl} alt={elem.name}/> </td>
                                    <td>{elem.name}</td>
                                    <td>{elem.popularity}</td>
                                    <td> <Button isClicked={this.handleDelete} btnText="Delete" btnKey={elem.name}/> </td>
                                </tr>
                            );
                                
                        })}
                    </tbody>
                </table>
            </div>
           
        );
    }    
    
}

class TableHead extends Component {
    render() {
        return(
            <th>{this.props.tableHead}</th>
        );
    }
}

export default Card;