import React from "react";

const Card = ({card, handleClick}) => {
    return (
        <div className="card" onClick={() => handleClick(card.id)} >
            <img src={card.src}></img>
        </div>
    )
}

export default Card;