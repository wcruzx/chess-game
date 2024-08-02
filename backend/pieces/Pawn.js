const Piece = require('./Piece');

class Pawn extends Piece {
  constructor(color) {
    this.color = color; // 'white' ou 'black'
  }

  isValidMove(from, to, board) {
    const direction = this.color === 'white' ? -1 : 1;
    const startRow = this.color === 'white' ? 6 : 1;

    // Movimento simples para frente
    if (from.col === to.col && to.row === from.row + direction && !board[to.row][to.col]) {
      return true;
    }

    // Movimento inicial de duas casas
    if (from.row === startRow && from.col === to.col && to.row === from.row + 2 * direction && !board[to.row][to.col] && !board[from.row + direction][to.col]) {
      return true;
    }

    // Captura na diagonal
    if (Math.abs(from.col - to.col) === 1 && to.row === from.row + direction && board[to.row][to.col] && board[to.row][to.col].color !== this.color) {
      return true;
    }

    return false;
  }
}

module.exports = Pawn;