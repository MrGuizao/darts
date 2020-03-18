import React from "react";

export default function MiddleMenu({ newGame, imgDice, UpdateScores, stopDice }) {
     return (
          <div className="menu">
               <button onClick={newGame}>New Game</button>
               <img src={imgDice()} alt="" />
               <button onClick={UpdateScores}>Roll dice</button>
               <button onClick={stopDice}>Stop dice</button>
          </div>
     );
}
