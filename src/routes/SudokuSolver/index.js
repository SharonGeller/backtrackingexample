import React, { useState } from "react";
import { makeStyles, Box, Button } from "@material-ui/core";
import Board from "../../components/Board";
import createBoard from "../../utils/board-creator";
import {
  checkIfValid,
  findEmptyCell,
  setValueToCell,
} from "../../utils/sudoku-solver-helper";
import sleep from "../../utils/sleep";

const SudokuSolver = () => {
  const classes = useStyles();

  const [board, setBoard] = useState(createBoard(9));

  const resetBoard = () => {
    const newBoard = createBoard(9);
    setBoard(newBoard);
  };

  const solveBoard = async () => {
    const emptyCell = findEmptyCell(board);
    if (!emptyCell) return true;

    await sleep(2000);
    const { x, y } = emptyCell.position;

    for (let i = 1; i < 10; i++) {
      const isValid = checkIfValid(board, i, { x, y });
      if (isValid) {
        const newBoard = setValueToCell(board, i, { x, y });
        setBoard(newBoard);

        if (solveBoard()) return true;

        const oldBoard = setValueToCell(board, 0, { x, y });
        setBoard(oldBoard);
      }
    }

    return false;
  };

  return (
    <Box className={classes.continer}>
      <Board board={board} setBoard={setBoard} />
      <Button
        className={classes.button}
        color={"primary"}
        variant={"contained"}
        onClick={solveBoard}
      >
        solve
      </Button>
      <Button
        className={classes.button}
        color={"secondary"}
        variant={"contained"}
        onClick={resetBoard}
      >
        reset
      </Button>
    </Box>
  );
};

const useStyles = makeStyles({
  continer: {
    width: "100%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    marginTop: "3%",
  },
});

export default SudokuSolver;
