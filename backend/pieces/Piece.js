class Piece {
  constructor(color) {
    this.color = color;
  }

  isValidMove(board, from, to) {
    // Método a ser implementado nas subclasses
    return false;
  }
}

module.exports = Piece;
