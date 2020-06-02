import React, {Component} from 'react';
import '../styling/App.css';

class Button extends Component {

    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        return this.props.btnKey;
    }
    render() {
        return (
            <button onClick={this.props.isClicked} value={this.props.btnKey}>{this.props.btnText}</button>
        );
    }
}

export default Button;