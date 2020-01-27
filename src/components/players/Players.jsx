import React from "react";
import "./player.css";

export default function Players({ number, current, randomNumber }) {
     // function totalScore(total) {
     //      return (total += randomNumber());
     // }

     return (
          <>
               <div className="dashboard-player">
                    <h2>Player {number}</h2>
                    <h3>Score: {randomNumber}</h3>
                    <h3>Atual: {current}</h3>
               </div>
          </>
     );
}
