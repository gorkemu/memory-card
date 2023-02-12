import React, { useEffect, useState } from "react";
import Card from "./Card";

const Cards = ({handleClick, score, bestScore}) => {

    let pictures = [
        {
            src: "https://picsum.photos/id/0/120/",
            id: 0
        },
        {
            src: "https://picsum.photos/id/1/120/",
            id: 1
        },
        {
            src: "https://picsum.photos/id/2/120/",
            id: 2
        },
        {
            src: "https://picsum.photos/id/3/120/",
            id: 3
        },
        {
            src: "https://picsum.photos/id/4/120/",
            id: 4
        },
        {
            src: "https://picsum.photos/id/5/120/",
            id: 5
        },
        {
            src: "https://picsum.photos/id/6/120/",
            id: 6
        },
        {
            src: "https://picsum.photos/id/7/120/",
            id: 7
        },
        {
            src: "https://picsum.photos/id/8/120/",
            id: 8
        }
    ]

    const [cards, setCards] = useState(pictures);

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
                <Card card={card} key={card.id} src={card.src} handleClick={handleClick} />
            ))}
        </div>
    )
}

export default Cards;