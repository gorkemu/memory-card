import React, { useState } from "react";
import Cards from "./components/Cards";
import Scoreboard from "./components/Scoreboard";
import './App.css';

const App = () => {
  const [cardsArray, setCardsArray] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);


  const handleScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const handleBestScore = () => {
    setBestScore(score)
  }

  const handleWord = (word) => {
    setCardsArray((prevArray) => [...prevArray, word]);
  }

  const reset = () => {
    setScore(0);
    setCardsArray([]);
  }

  const handleClick = (word) => {
    if(!cardsArray.includes(word)) {
      handleWord(word);
      handleScore();
    } else {
      handleBestScore();
      reset();
    }
  }

  return (
    <div className="App">
      <Scoreboard score={score} bestScore={bestScore} />
      <Cards cards={cardsArray} handleClick={handleClick} score={score} bestScore={bestScore} />
    </div>
  );
}

export default App;
