const Piece = require('./Piece');

class Rook extends Piece {
  isValidMove(board, from, to) {
    if (from.row === to.row || from.col === to.col) {
      return true;
    }
    return false;
  }
}

module.exports = Rook;
