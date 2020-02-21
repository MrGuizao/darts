import React from "react";
import "./player.css";

export default function Players({ id, total, current, active }) {
     const colorStyle = { color: 'red' }
     if (active === true) {
          return (
               <div className="dashboard-player" style={{backgroundColor: "#e7e7e735"}}>
                    <h2 style={{color: 'red'}}>Player {id}</h2>
                    <h3 style={{color: 'red'}}>Score: {current}</h3>
                    <h3 style={{color: 'red'}}>Total: {total}</h3>
               </div>
          )
     } else {
          return (
               <div className="dashboard-player">
                    <h2>Player {id}</h2>
                    <h3>Score: {current}</h3>
                    <h3>Total: {total}</h3>
               </div>
          )
     }
}
