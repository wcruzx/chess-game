const Piece = require('./Piece');

class Queen extends Piece {
  isValidMove(board, from, to) {
    if (from.row === to.row || from.col === to.col || Math.abs(from.row - to.row) === Math.abs(from.col - to.col)) {
      return true;
    }
    return false;
  }
}

module.exports = Queen;
