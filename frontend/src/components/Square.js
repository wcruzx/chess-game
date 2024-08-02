import React from 'react';
import { useDrop } from 'react-dnd';
import Piece from './Piece';
import './Square.css';

const Square = ({ piece, position, movePiece, selectedPiece, isPossibleMove, onPieceClick }) => {
  const isDark = (position.row + position.col) % 2 === 1;
  const className = `square ${isDark ? 'dark' : 'light'} ${isPossibleMove ? 'highlight' : ''}`;

  const [{ isOver }, drop] = useDrop({
    accept: 'PIECE',
    drop: (item) => {
      movePiece(item.position, position);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const handleClick = () => {
    if (piece) {
      onPieceClick(position);
    } else if (selectedPiece && isPossibleMove) {
      movePiece(selectedPiece, position);
    }
  };

  return (
    <div 
      ref={drop} 
      className={className} 
      onClick={handleClick} 
      style={{ backgroundColor: isOver ? 'yellow' : undefined }}
    >
      {piece && <Piece color={piece.color} type={piece.type} position={position} />}
    </div>
  );
};

export default Square;
