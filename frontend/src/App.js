import React, { useEffect, useState } from 'react';
import Board from './components/Board';
import './App.css';

const App = () => {
  const [gameState, setGameState] = useState({
    board: Array(8).fill(null).map(() => Array(8).fill(null))
  });
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [possibleMoves, setPossibleMoves] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/initialBoard')
      .then(response => response.json())
      .then(data => {
        setGameState({ board: data });
      })
      .catch(error => {
        console.error('Error fetching the initial board:', error);
      });
  }, []);

  const movePiece = (fromPosition, toPosition) => {
    const board = gameState.board.map(row => row.slice());
    const piece = board[fromPosition.row][fromPosition.col];
    board[fromPosition.row][fromPosition.col] = null;
    board[toPosition.row][toPosition.col] = piece;
    setGameState({ board });
    setSelectedPiece(null);
    setPossibleMoves([]);
  };

  const handlePieceClick = (position) => {
    const piece = gameState.board[position.row][position.col];
    if (piece) {
      fetch(`http://localhost:4000/possibleMoves?row=${position.row}&col=${position.col}`)
        .then(response => response.json())
        .then(data => {
          setSelectedPiece(position);
          setPossibleMoves(data);
        })
        .catch(error => {
          console.error('Error fetching possible moves:', error);
        });
    }
  };

  return (
    <div className="App">
      <h1 className="title">Chess Game</h1>      <Board 
        gameState={gameState} 
        movePiece={movePiece} 
        selectedPiece={selectedPiece} 
        possibleMoves={possibleMoves} 
        onPieceClick={handlePieceClick} 
      />
    </div>
  );
};

export default App;
