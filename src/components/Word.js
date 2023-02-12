import React from "react";

const Word = ({ card, handleClick }) => {
    return (
        <div className="word" onClick={() => handleClick(card.word)} >
            {card.word}
        </div>
    )
}

export default Word;