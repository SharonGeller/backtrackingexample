import React, { useState, useRef } from "react";
import { makeStyles, Box, Button, Slider } from "@material-ui/core";
import Board from "../../components/Board";
import Panel from "../../components/Panel";
import createBoard from "../../utils/board-creator";
import {
  checkIfValid,
  findEmptyCell,
  setValueToCell,
  setSelectedCell,
  setUnselectedCell,
} from "../../utils/sudoku-solver-helper";
import deepCopy from "../../utils/deep-copy";
import sleep from "../../utils/sleep";

const SudokuSolver = () => {
  const classes = useStyles();

  const [board, setBoard] = useState(createBoard(9));
  const [steps, setSteps] = useState();
  const [speed, setSpeed] = useState(200);
  const [isSolved, setIsSolved] = useState(false);
  const speedRef = useRef(200);
  const isPlaying = useRef(false);

  const resetBoard = (e) => {
    isPlaying.current = false;
    const newBoard = createBoard(9);
    setBoard(newBoard);
    setIsSolved(false);
    setSteps([1]);
  };

  const solveBoard = (currentBoard, currnetSteps) => {
    const emptyCell = findEmptyCell(currentBoard);
    if (!emptyCell) return true;

    const { x, y } = emptyCell.position;
    currentBoard = setSelectedCell(currentBoard, { x, y });

    for (let i = 1; i < 10; i++) {
      const isValid = checkIfValid(currentBoard, i, { x, y });
      if (isValid) {
        currentBoard = setValueToCell(currentBoard, i, { x, y });
        currnetSteps.push(deepCopy(currentBoard));

        currentBoard = setUnselectedCell(currentBoard, { x, y });
        if (solveBoard(currentBoard, currnetSteps)) return true;

        currentBoard = setSelectedCell(currentBoard, { x, y });
        currentBoard = setValueToCell(currentBoard, 0, { x, y });
        currnetSteps.push(deepCopy(currentBoard));
      }
    }

    return false;
  };

  const handleSolveClick = () => {
    let currentBoard = deepCopy(board);
    let currnetSteps = [];

    solveBoard(currentBoard, currnetSteps);
    setBoard(currentBoard);
    setSteps(currnetSteps);
    setIsSolved(true);
  };

  const handlePlayClick = async () => {
    const allSteps = deepCopy(steps);
    isPlaying.current = true;

    for (let i = 0; i < allSteps.length; i++) {
      if (!isPlaying.current) return;

      setBoard(allSteps[i]);
      console.log(speed);
      await sleep(speedRef.current);
    }
  };

  const hanleSpeedChange = (e, v) => {
    speedRef.current = v;
    setSpeed(v);
  };

  return (
    <Box className={classes.continer}>
      <Board board={board} setBoard={setBoard} />
      <Panel
        handleSolveClick={handleSolveClick}
        handlePlayClick={handlePlayClick}
        hanleSpeedChange={hanleSpeedChange}
        resetBoard={resetBoard}
        speed={speedRef.current}
        isSolved={isSolved}
      />
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
  slider: {
    width: "100px",
  },
});

export default SudokuSolver;
