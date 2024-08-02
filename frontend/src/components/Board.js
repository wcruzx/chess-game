import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Square from './Square';
import './Board.css';

const Board = ({ gameState, movePiece, selectedPiece, possibleMoves, onPieceClick }) => {
  const renderSquare = (i) => {
    const row = Math.floor(i / 8);
    const col = i % 8;
    const piece = gameState.board[row][col];
    const isPossibleMove = possibleMoves.some(move => move.row === row && move.col === col);
    return (
      <Square 
        key={i} 
        piece={piece} 
        position={{ row, col }} 
        movePiece={movePiece} 
        selectedPiece={selectedPiece} 
        isPossibleMove={isPossibleMove} 
        onPieceClick={onPieceClick} 
      />
    );
  };

  const squares = Array.from(Array(64).keys()).map((i) => renderSquare(i));

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="board">{squares}</div>
      
    </DndProvider>
  );
};

export default Board;
