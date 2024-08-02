const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());

const initialBoard = [
  [{ color: 'black', type: 'rook' }, { color: 'black', type: 'knight' }, { color: 'black', type: 'bishop' }, { color: 'black', type: 'queen' }, { color: 'black', type: 'king' }, { color: 'black', type: 'bishop' }, { color: 'black', type: 'knight' }, { color: 'black', type: 'rook' }],
  Array(8).fill({ color: 'black', type: 'pawn' }),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill({ color: 'white', type: 'pawn' }),
  [{ color: 'white', type: 'rook' }, { color: 'white', type: 'knight' }, { color: 'white', type: 'bishop' }, { color: 'white', type: 'queen' }, { color: 'white', type: 'king' }, { color: 'white', type: 'bishop' }, { color: 'white', type: 'knight' }, { color: 'white', type: 'rook' }]
];

app.get('/initialBoard', (req, res) => {
  res.json(initialBoard);
});

const getPossibleMoves = (piece, position, board) => {
  // Simplified logic for possible moves, you can expand this
  const moves = [];
  const directions = {
    pawn: [[-1, 0], [1, 0]],
    rook: [[-1, 0], [1, 0], [0, -1], [0, 1]],
    knight: [[-2, -1], [-2, 1], [2, -1], [2, 1], [-1, -2], [1, -2], [-1, 2], [1, 2]],
    bishop: [[-1, -1], [-1, 1], [1, -1], [1, 1]],
    queen: [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]],
    king: [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]]
  };

  const validMove = (row, col) => row >= 0 && row < 8 && col >= 0 && col < 8 && (!board[row][col] || board[row][col].color !== piece.color);

  directions[piece.type].forEach(([dRow, dCol]) => {
    const newRow = position.row + dRow;
    const newCol = position.col + dCol;
    if (validMove(newRow, newCol)) {
      moves.push({ row: newRow, col: newCol });
    }
  });

  return moves;
};

app.get('/possibleMoves', (req, res) => {
  const { row, col } = req.query;
  const piece = initialBoard[row][col];
  const possibleMoves = getPossibleMoves(piece, { row: parseInt(row), col: parseInt(col) }, initialBoard);
  res.json(possibleMoves);
});

app.listen(port, () => {
  console.log(`Chess server listening at http://localhost:${port}`);
});
