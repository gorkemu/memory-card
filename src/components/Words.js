import React, { useEffect, useState } from "react";
import Word from "./Word";

const Words = ({ handleClick, score, bestScore }) => {

    let words = [
        {
            word: "who",
            id: 0
        },
        {
            word: "why",
            id: 1
        },
        {
            word: "when",
            id: 2
        },
        {
            word: "where",
            id: 3
        },
        {
            word: "which",
            id: 4
        },
        {
            word: "how",
            id: 5
        },
        {
            word: "what",
            id: 6
        },
        {
            word: "whom",
            id: 7
        },
        {
            word: "with",
            id: 8
        }
    ]

    const [cards, setCards] = useState(words);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    useEffect(() => {
        const newCards = [...cards];
        shuffleArray(newCards);
        setCards(newCards);
    }, [score, bestScore]);


    return (
        <div className="cards-container">
            {cards.map((card) => (
                <Word card={card} key={card.id} word={card.word} handleClick={handleClick} />
            ))}
        </div>
    )
}

export default Words;