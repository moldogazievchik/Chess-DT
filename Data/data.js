function Square(color, id, piece = null) {
  return { color, id, piece, isHighlighted: false };
}

function SquareRow(rowId) {
  const squareRow = [];
  const abcd = ["a", "b", "c", "d", "e", "f", "g", "h"];

  abcd.forEach((element, index) => {
    const color = (rowId + index) % 2 === 0 ? "white" : "black";
    squareRow.push(Square(color, element + rowId));
  });

  return squareRow;
}

function initGame() {
  const board = [
    SquareRow(8),
    SquareRow(7),
    SquareRow(6),
    SquareRow(5),
    SquareRow(4),
    SquareRow(3),
    SquareRow(2),
    SquareRow(1),
  ];

  // Добавление фигур на стартовые позиции
  // 8-я и 1-я линии - основные фигуры
  board[0].forEach((square, index) => {
    const pieces = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"];
    square.piece = { color: "black", type: pieces[index] };
  });
  board[7].forEach((square, index) => {
    const pieces = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"];
    square.piece = { color: "white", type: pieces[index] };
  });

  // 7-я и 2-я линии - пешки
  board[1].forEach((square) => {
    square.piece = { color: "black", type: "pawn" };
  });
  board[6].forEach((square) => {
    square.piece = { color: "white", type: "pawn" };
  });

  return board;
}

export { initGame };
