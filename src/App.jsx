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

  function UpdateBoard (row,col) {
    if (boardGame[row][col] || CheckForWin() || CheckForTie()) {
      return;
    }
    const update = boardGame.slice();
    update[row][col] = playerTurn;
    setBoardGame(update);
    if (CheckForWin() || CheckForTie()) {
      return;
    }
    setPlayerTurn(playerTurn == "X" ? 'O':'X');
  }

  let gameText = "";
  if (CheckForWin()) {
    gameText = "Player " + playerTurn + " Wins!";
  } else if (CheckForTie()) {
    gameText = "Game is a Tie!";
  } else {
    gameText = "Player " + playerTurn + "'s Turn";
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

  function RestartGame() {
    setBoardGame([["","",""],["","",""],["","",""]]);
    setPlayerTurn("X");
  }

  function CheckForTie() {
    let check = true;
    boardGame.forEach(element => {
        element.forEach(subelement => {
          if (subelement == "") {
            check = false;
          }
        });
    });
    return check;
  }
  if (CheckForWin() || CheckForTie()) {
    return (
    <div>
      <p>
        {gameText}
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
      <button class="button-restart" onClick={() => RestartGame()}>
        Restart
      </button>
    </div>
    )
  } else {
    return (
      <div>
        <p>
          {gameText}
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
      </div>
    )
  }
}
export default App