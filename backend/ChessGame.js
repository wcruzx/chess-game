const Pawn = require('./pieces/Pawn');
const Rook = require('./pieces/Rook');
const Knight = require('./pieces/Knight');
const Bishop = require('./pieces/Bishop');
const Queen = require('./pieces/Queen');
const King = require('./pieces/King');

class ChessGame {
  constructor() {
    this.board = this.createInitialBoard();
    this.turn = 'w';
  }

  createInitialBoard() {
    const emptyRow = Array(8).fill(null);
    return [
      [new Rook('b'), new Knight('b'), new Bishop('b'), new Queen('b'), new King('b'), new Bishop('b'), new Knight('b'), new Rook('b')],
      [new Pawn('b'), new Pawn('b'), new Pawn('b'), new Pawn('b'), new Pawn('b'), new Pawn('b'), new Pawn('b'), new Pawn('b')],
      ...Array(4).fill(emptyRow),
      [new Pawn('w'), new Pawn('w'), new Pawn('w'), new Pawn('w'), new Pawn('w'), new Pawn('w'), new Pawn('w'), new Pawn('w')],
      [new Rook('w'), new Knight('w'), new Bishop('w'), new Queen('w'), new King('w'), new Bishop('w'), new Knight('w'), new Rook('w')]
    ];
  }

  isValidMove(from, to) {
    const piece = this.board[from.row][from.col];
    if (piece && piece.color === this.turn) {
      return piece.isValidMove(this.board, from, to);
    }
    return false;
  }

  makeMove(from, to) {
    if (this.isValidMove(from, to)) {
      const piece = this.board[from.row][from.col];
      this.board[to.row][to.col] = piece;
      this.board[from.row][from.col] = null;
      this.turn = this.turn === 'w' ? 'b' : 'w';
      return true;
    }
    return false;
  }
}

module.exports = ChessGame;
