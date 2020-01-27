import React, { useState } from "react";
import "./App.css";
import Players from "./components/players/Players";
import MiddleMenu from "./components/menu/MiddleMenu";

// const game = {
//      player1: {
//           totalScore: 0,
//           currentScore: 0
//      },
//      player2: {
//           totalScore: 0,
//           currentScore: 0
//      }
// };
const game = [
     {id: 0, totalScore: 0, currentScore: 0 },
     {id: 1, totalScore: 0, currentScore: 0 },
];

function App() {
     function randomNumber() {
          return Math.round(Math.random() * 5) + 1;
     }
     function lowDice() {
          return require(`./images/dice-${randomNumber()}.png`);
     }
     // function totalScore(total) {
     //      return (total += randomNumber());
     // }

     const [player, setPlayer] = useState(game);
     // const [active, setActive] = useState(0);

     return (
          <div className="App">
               <h1>BOARD GAME</h1>
               <MiddleMenu lowDice={lowDice} />
               <main>
                    <Players
                         number="1"
                         total={player.player1.totalScore}
                         current={player.player1.currentScore}
                         randomNumber={randomNumber}
                    />
                    <Players
                         number="2"
                         total={player.player2.totalScore}
                         current={player.player2.currentScore}
                         randomNumber={randomNumber}
                    />
               </main>
          </div>
     );
}

export default App;
