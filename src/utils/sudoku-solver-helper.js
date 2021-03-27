export const findEmptyCell = (board) => {
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board.length; x++) {
      if (board[y][x].number === 0) return board[y][x];
    }
  }
  return null;
};

export const checkIfValid = (board, value, position) => {
  const { x, y } = position;

  for (let index = 0; index < board[0].length; index++) {
    if (board[y][index].number === value && index !== x) return false;
  }

  for (let index = 0; index < board.length; index++) {
    if (board[index][x].number === value && index !== y) return false;
  }

  const boxX = Math.floor(x / 3);
  const boxY = Math.floor(y / 3);

  for (let i = boxY * 3; i < boxY * 3 + 3; i++)
    for (let j = boxX * 3; j < boxX * 3 + 3; j++)
      if (board[i][j].number === value && i !== y && j !== x) return false;

  return true;
};

export const setValueToCell = (board, value, { x, y }) => {
  let newBoard = [...board];
  newBoard[y][x].number = value;

  return newBoard;
};

export const setColorToCell = (board, color, { x, y }) => {
  let newBoard = [...board];
  newBoard[y][x].color = color;

  return newBoard;
};
