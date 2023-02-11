import React from "react";

const Scoreboard = ({ score, bestScore }) => {
    return (
        <div className="Scoreboard">
            <div>Score: {score}</div>
            <div>Best Score: {bestScore}</div>
        </div>
    )
}

export default Scoreboard;