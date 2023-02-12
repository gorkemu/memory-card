import React, { useState } from "react";
import Words from "./Words";
import Scoreboard from "./Scoreboard";
import '../App.css';

const WordApp = () => {
    const [cardsArray, setCardsArray] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);


    const handleScore = () => {
        setScore((prevScore) => prevScore + 1);
    };

    const handleBestScore = () => {
        setBestScore(score)
    }

    const addCard = (word) => {
        setCardsArray((prevArray) => [...prevArray, word]);
    }

    const reset = () => {
        setScore(0);
        setCardsArray([]);
    }

    const handleClick = (word) => {
        if (!cardsArray.includes(word)) {
            addCard(word);
            handleScore();
        } else {
            handleBestScore();
            reset();
        }
    }

    return (
        <div className="App">
            <Scoreboard score={score} bestScore={bestScore} />
            <Words cards={cardsArray} handleClick={handleClick} score={score} bestScore={bestScore} />
        </div>
    );
}

export default WordApp;
