const createBoard = (size) => {
  let board = [];
  for (let y = 0; y < 9; y++) {
    let row = [];
    for (let x = 0; x < size; x++) {
      let cell = {
        number: 0,
        position: { x, y },
        color: "default",
      };
      row[x] = cell;
    }
    board[y] = row;
  }
  return board;
};

export default createBoard;
