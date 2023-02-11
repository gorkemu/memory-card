import React from "react";

const Card = ({card, handleClick}) => {
    return (
        <div className="card" onClick={() => handleClick(card.word)} >
            {card.word}
        </div>
    )
}

export default Card;