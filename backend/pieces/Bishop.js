const Piece = require('./Piece');

class Bishop extends Piece {
  isValidMove(board, from, to) {
    if (Math.abs(from.row - to.row) === Math.abs(from.col - to.col)) {
      return true;
    }
    return false;
  }
}

module.exports = Bishop;
