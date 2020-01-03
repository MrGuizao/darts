import React, { useState } from "react";
import Players from "./components/players/Players";
import "./App.css";

const game = {
     player1: {
          totalScore: 0,
          currentScore: 0
     },
     player2: {
          totalScore: 0,
          currentScore: 0
     }
};

function App() {
     const [player, setPlayer] = useState(game);

     return (
          <div className="App">
               <h1>BOARD GAME</h1>
               <main>
                    <Players number="1" player={player.player1} />
                    <Players number="2" player={player.player2} />
               </main>
          </div>
     );
}

export default App;
