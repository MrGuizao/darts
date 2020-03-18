import React from "react";
import "./player.css";

export default function Players({ id, total, current, active }) {
     return (
          <div className="dashboard-player">
               {(id === 1) ? <h2 style={{color: 'red'}}>Player {id}</h2> : <h2>Player {id}</h2>}
               <h3>Score: {current}</h3>
               <h3>Total: {total}</h3>
          </div>
     )
}
