import React from 'react';
import './styling/App.css';
import imdbData from './data/imdb.json';
import Card from './components/Card';
import Header from './components/Header';


function App() {
  const imdbTop5 = [imdbData[0],imdbData[1],imdbData[2],imdbData[3],imdbData[4]];
  const title = 'IMDB ACTORS';
  const btnTexts = ["Add random contact", "Sorted by Name", "Sorted by popularity"];
  const tableHeads = ["Picture", "Name", "Popularity", "Action"];
  
    return (
      <div className="App">
          <Header title={title}></Header>
          <Card tableHeads={tableHeads} btnTexts={btnTexts} top5={imdbTop5} ></Card>
      </div>
    );
}

export default App;