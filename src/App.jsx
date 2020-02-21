import React, { Component } from 'react'
import "./App.css";
import Players from "./components/players/Players";
import { act } from 'react-dom/test-utils';

export default class App extends Component {
     state = {
          activePlayer: true,
          dice: Math.round(Math.random() * 5) + 1,
          total1: 0,
          total2: 0,
          current1: 0,
          current2: 0,
          // players: [
          //      { id: 1, totalScore: 0, currentScore: 0 },
          //      { id: 2, totalScore: 0, currentScore: 0 }
          // ],
     }

     imgDice = () => require(`./images/dice-${this.state.dice}.png`);

     UpdateScores = () => {
          this.setState({ dice: Math.round(Math.random() * 5) + 1 });
          (this.state.activePlayer === true) ?
               this.setState(state => { current1: state.current1 += state.dice }) :
               this.setState(state => { current2: state.current2 += state.dice });
     }

     stopDice = () => {
          this.setState({ activePlayer: !this.state.activePlayer });
          if (this.state.activePlayer === true) {
               this.setState(state => { total1: state.total1 += state.current1 });
               this.setState({ current1: 0 });
          } else {
               this.setState(state => { total2: state.total2 += state.current2 });
               this.setState({ current2: 0 });
          }
     }

     newGame = () => {

     }

     // this.setState(prevState => ({
     //      array: [...prevState.array, newElement]
     //  }))

     render() {
          const { total1, total2, current1, current2, activePlayer } = this.state;
          return (
               <div className="App">
                    <h1>BOARD GAME</h1>
                    <main>
                         <Players key="1" id="1" total={total1} current={current1} active={activePlayer}/>
                         <Players key="2" id="2" total={total2} current={current2} />
                         {/* {
                              this.state.players.map(play => <Players key={play.id} id={play.id} players={this.state.players} />)
                         } */}
                    </main>
                    <div className="menu">
                         <button>New Game</button>
                         <img src={this.imgDice()} alt="" />
                         <button onClick={this.UpdateScores}>Roll dice</button>
                         <button onClick={this.stopDice}>Stop dice</button>
                    </div>
               </div>
          )
     }
}












// const player1 = { activePlayer: true, id: 1, totalScore: 0, currentScore: 0 };
// const player2 = { activePlayer: false, id: 2, totalScore: 0, currentScore: 0 };


// function App() {
//      const [playerOne, setPlayerOne] = useState(player1);
//      const [playerTwo, setPlayerTwo] = useState(player2);
//      const [dice, setDice] = useState(lowDice);

//      // ENTREGA UM NUMERO ALEATÓRIO DE 1 A 6
//      // SOMA TODOS OS PONTOS
//      function randomNumber() {
//           let random = Math.round(Math.random() * 5) + 1;
//           if (playerOne.currentScore >= 100) {
//                newGame();
//           } else {
//                playerOne.currentScore += random;
//                if(random === 1){
//                     playerOne.currentScore = 0;
//                     playerTwo.currentScore += random;
//                }

//           }
//           return random;
//      }
//      // MUDA O NUMERO DO DADO
//      function lowDice() {
//           return require(`./images/dice-${randomNumber()}.png`);
//      }
//      // INICIA UM NOVO JOGO
//      function newGame() {
//           playerOne.currentScore = 0;
//           playerOne.totalScore = 0;
//           playerTwo.currentScore = 0;
//           playerTwo.totalScore = 0;
//      }
//      // MOSTRA O PLAYER ATIVO
//      // function setActivePlayer() {
//      // }

//      return (
//           <div className="App">
//                <h1>BOARD GAME</h1>
//                <main>
//                     <Players
//                          key={player1.id}
//                          number={player1.id}
//                          total={playerOne.totalScore}
//                          current={playerOne.currentScore}
//                          randomNumber={randomNumber}
//                     />
//                     <Players
//                          key={player2.id}
//                          number={player2.id}
//                          total={playerTwo.totalScore}
//                          current={playerTwo.currentScore}
//                          randomNumber={randomNumber}
//                     />
//                </main>
//                <div className="menu">
//                     <button onClick={() => newGame()}>New Game</button>
//                     <img src={dice} alt="" />
//                     <button onClick={() => setDice(lowDice())}>
//                          Girar Dado
//                     </button>
//                     <button>Parar Dado</button>
//                </div>
//           </div>
//      );
// }

// export default App;
