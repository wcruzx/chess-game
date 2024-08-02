import React from 'react';
import { useDrag } from 'react-dnd';
import './Piece.css';

const Piece = ({ color, type, position }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'PIECE',
    item: { type: 'PIECE', color, pieceType: type, position },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const pieceClass = `piece ${color}-${type}`;
  const pieceSrc = `/assets/${color}-${type}.png`;

  return (
    <img
      ref={drag}
      src={pieceSrc}
      alt={`${color} ${type}`}
      className={pieceClass}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    />
  );
};

export default Piece;
