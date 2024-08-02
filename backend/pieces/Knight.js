const Piece = require('./Piece');

class Knight extends Piece {
  isValidMove(board, from, to) {
    const rowDiff = Math.abs(from.row - to.row);
    const colDiff = Math.abs(from.col - to.col);
    if ((rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2)) {
      return true;
    }
    return false;
  }
}

module.exports = Knight;
