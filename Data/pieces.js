// Объект, содержащий пути к изображениям для фигур
const pieceImages = {
  black: {
    pawn: "Assets/images/pieces/black/pawn.png",
    bishop: "Assets/images/pieces/black/bishop.png",
    knight: "Assets/images/pieces/black/knight.png",
    king: "Assets/images/pieces/black/king.png",
    queen: "Assets/images/pieces/black/queen.png",
    rook: "Assets/images/pieces/black/rook.png",
  },
  white: {
    pawn: "Assets/images/pieces/white/pawn.png",
    bishop: "Assets/images/pieces/white/bishop.png",
    knight: "Assets/images/pieces/white/knight.png",
    king: "Assets/images/pieces/white/king.png",
    queen: "Assets/images/pieces/white/queen.png",
    rook: "Assets/images/pieces/white/rook.png",
  },
};

/**
 * Функция для создания шахматной фигуры
 * @param {string} color - Цвет фигуры ("black" или "white")
 * @param {string} type - Тип фигуры ("pawn", "bishop", "knight", "king", "queen", "rook")
 * @param {string} current_position - Текущая позиция фигуры (например, "e2")
 * @returns {object} - Объект, представляющий фигуру
 */
function createPiece(color, type, current_position) {
  return {
    current_position, // Текущая позиция на доске
    img: pieceImages[color][type], // Путь к изображению фигуры
    piece_name: `${color.toUpperCase()}_${type.toUpperCase()}`, // Имя фигуры в формате COLOR_TYPE
    move: type === "king" || type === "rook" ? false : undefined, // Для короля и ладьи добавляется флаг, указывающий на их движение
  };
}

// Функции для создания чёрных фигур
export const blackPawn = (current_position) =>
  createPiece("black", "pawn", current_position);
export const blackBishop = (current_position) =>
  createPiece("black", "bishop", current_position);
export const blackKnight = (current_position) =>
  createPiece("black", "knight", current_position);
export const blackKing = (current_position) =>
  createPiece("black", "king", current_position);
export const blackQueen = (current_position) =>
  createPiece("black", "queen", current_position);
export const blackRook = (current_position) =>
  createPiece("black", "rook", current_position);

// Функции для создания белых фигур
export const whitePawn = (current_position) =>
  createPiece("white", "pawn", current_position);
export const whiteBishop = (current_position) =>
  createPiece("white", "bishop", current_position);
export const whiteKnight = (current_position) =>
  createPiece("white", "knight", current_position);
export const whiteKing = (current_position) =>
  createPiece("white", "king", current_position);
export const whiteQueen = (current_position) =>
  createPiece("white", "queen", current_position);
export const whiteRook = (current_position) =>
  createPiece("white", "rook", current_position);
