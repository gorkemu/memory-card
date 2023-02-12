import React, { useState } from "react";
import Cards from "./Cards";
import Scoreboard from "./Scoreboard";
import '../App.css';

const PictureApp = () => {
    const [cardsArray, setCardsArray] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);


    const handleScore = () => {
        setScore((prevScore) => prevScore + 1);
    };

    const handleBestScore = () => {
        setBestScore(score)
    }

    const addCard = (id) => {
        setCardsArray((prevArray) => [...prevArray, id]);
    }

    const reset = () => {
        setScore(0);
        setCardsArray([]);
    }

    const handleClick = (id) => {
        if (!cardsArray.includes(id)) {
            addCard(id);
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

export default PictureApp;
