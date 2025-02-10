import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {

  return (
    <div>
      <p>Tic Tac Toe</p>
      <Board/>
    </div>
  )
}

const Board = () => {

  const [boardGame, setBoardGame] = useState([["","",""],["","",""],["","",""]]);
  const [playerTurn, setPlayerTurn] = useState("X");
 // useEffect(() => {
 //   CheckForWin()
 // }, [boardGame])

  function UpdateBoard (row,col) {
    if (boardGame[row][col] || CheckForWin()) {
      return;
    }
    const update = boardGame.slice();
    update[row][col] = playerTurn;
    setBoardGame(update);
    if (CheckForWin()) {
      return;
    }
    setPlayerTurn(playerTurn == "X" ? 'O':'X');
  }
  let winText = "";
  if (CheckForWin()) {
    winText = "Player " + playerTurn + " Wins!";
  }

  function CheckForWin () {
    if (boardGame[0][0] == boardGame[0][1] && boardGame[0][0] == boardGame[0][2] && boardGame[0][0] != "") {
      return true;
    } else if (boardGame[1][0] == boardGame[1][1] && boardGame[1][0] == boardGame[1][2] && boardGame[1][0] != "") {
      return true;
    } else if (boardGame[2][0] == boardGame[2][1] && boardGame[2][0] == boardGame[2][2] && boardGame[2][0] != "") {
      return true;
    } else if (boardGame[0][0] == boardGame[1][0] && boardGame[0][0] == boardGame[2][0] && boardGame[0][0] != "") {
      return true;
    } else if (boardGame[0][1] == boardGame[1][1] && boardGame[0][1] == boardGame[2][1] && boardGame[0][1] != "") {
      return true;
    } else if (boardGame[0][2] == boardGame[1][2] && boardGame[0][2] == boardGame[2][2] && boardGame[0][2] != "") {
      return true;
    } else if (boardGame[0][0] == boardGame[1][1] && boardGame[0][0] == boardGame[2][2] && boardGame[0][0] != "") {
      return true;
    } else if (boardGame[0][2] == boardGame[1][1] && boardGame[0][2] == boardGame[2][0] && boardGame[0][2] != "") {
      return true;
    } else {
      return false;
    }
  }
  function SpawnResetButton() {
    return(
      <div>
        <button>
          Reset
        </button>
      </div>
    )
  }

  return (
    <div>
      <p>
        Player {playerTurn}'s Turn!
      </p>
      <div class = "game-board">
        <div class = "board-row">
          <button onClick={() => UpdateBoard(0,0)}>
            {boardGame[0][0]}
          </button>
          <button onClick={() => UpdateBoard(0,1)}>
            {boardGame[0][1]}
          </button>
          <button onClick={() => UpdateBoard(0,2)}>
            {boardGame[0][2]}
          </button>
        </div>
        <div class = "board-row">
          <button onClick={() => UpdateBoard(1,0)}>
            {boardGame[1][0]}
          </button>
          <button onClick={() => UpdateBoard(1,1)}>
            {boardGame[1][1]}
          </button>
          <button onClick={() => UpdateBoard(1,2)}>
            {boardGame[1][2]}
          </button>
        </div>
        <div class = "board-row">
          <button onClick={() => UpdateBoard(2,0)}>
            {boardGame[2][0]}
          </button>
          <button onClick={() => UpdateBoard(2,1)}>
            {boardGame[2][1]}
          </button>
          <button onClick={() => UpdateBoard(2,2)}>
            {boardGame[2][2]}
          </button>
        </div>
      </div>
      <p style={{marginTop:'30px'}}>
        {winText}
      </p>
    </div>
  )
}
export default App