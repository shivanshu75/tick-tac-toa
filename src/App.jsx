import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };




  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);

  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1>
      <div className="board">
        {board.map((value, index) => (
          <button
            key={index}
            className="cell"
            onClick={() => handleClick(index)}
          >
            {value}
          </button>
        ))}
      </div>
      {winner ? (
        <div className="status">{winner} wins!</div>
      ) : (
        <div className="status">Next player: {isXNext ? "X" : "O"}</div>
      )}
    </div>
  );
};

export default App;
