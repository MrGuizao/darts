import React from "react";
import "./player.css";

import MiddleMenu from "../menu/MiddleMenu";

export default function Players({ number, total, current }) {
     function randomNumber(){
          return Math.round(Math.random() * 5) + 1;
     }
     function lowDice() {
          return require(`../../images/dice-${randomNumber()}.png`);
     }
     function totalScore(){
          return total += randomNumber();
     }

     return (
          <>
               <MiddleMenu lowDice={lowDice} />
               <div className="dashboard-player">
                    <h2>Player {number}</h2>
                    <h3>Score: {totalScore()}</h3>
                    <h3>Atual: {current}</h3>
               </div>
          </>
     );
}
