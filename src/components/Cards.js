import React, { useEffect, useState } from "react";
import Card from "./Card";

const Cards = ({handleClick, score, bestScore}) => {

    let words = [
        {
            word: 'where'
        },
        {
            word: 'when'
        },
        {
            word: 'which'
        },
        {
            word: 'how'
        },
        {
            word: 'why'
        },
        {
            word: 'what'
        },
        {
            word: 'who'
        },
        {
            word: 'whom'
        },
        {
            word: 'for'
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
                <Card card={card} key={card.word} handleClick={handleClick} />
            ))}
        </div>
    )
}

export default Cards;