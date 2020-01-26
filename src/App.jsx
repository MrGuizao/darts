import React, { useState } from "react";
import "./App.css";
import Players from "./components/players/Players";

const game = {
     player1: {
          totalScore: 0,
          currentScore: 0
     },
     player2: {
          totalScore: 0,
          currentScore: 0
     },
}
// const game = [
//      {
//           totalScore: 0,
//           currentScore: 0
//      },
//      {
//           totalScore: 0,
//           currentScore: 0
//      }
// ];


function App() {
     const [player, setPlayer] = useState(game);

     return (
          <div className="App">
               <h1>BOARD GAME</h1>
               <main>
                    <Players number="1" total={player.player1.totalScore} current={player.player1.currentScore} />
                    <Players number="2" total={player.player2.totalScore} current={player.player2.currentScore} />
               </main>
          </div>
     );
}

export default App;
