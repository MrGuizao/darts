import React, { useState } from "react";
import "./middlemenu.css";

export default function MiddleMenu({ lowDice }) {
     const [dice, setDice] = useState(lowDice);

     return (
          <div className="menu">
               <button>New Game</button>
               <img src={dice} alt="" />
               <button onClick={() => setDice(lowDice())}>Girar Dado</button>
               <button>Parar Dado</button>
          </div>
     );
}
