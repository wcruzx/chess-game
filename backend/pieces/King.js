const Piece = require('./Piece');

class King extends Piece {
  isValidMove(board, from, to) {
    const rowDiff = Math.abs(from.row - to.row);
    const colDiff = Math.abs(from.col - to.col);
    if (rowDiff <= 1 && colDiff <= 1) {
      return true;
    }
    return false;
  }
}

module.exports = King;
