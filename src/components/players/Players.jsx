import React from "react";
import "./player.css";

export default function Players({ number, player1, player2 }) {
     return (
          <div className="dashboard-player">
               <h2>Player {number}</h2>
               <img src={require(`../../images/dice-${Math.round(Math.random() * 5) + 1}.png`)} alt="" />
               <h3>Score: </h3>
               <button>Girar dado</button>
          </div>
     );
}
