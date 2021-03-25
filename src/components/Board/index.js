import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import Cell from "../Cell";

const Board = ({ board, setBoard }) => {
  const classes = useStyles();

  const handleCellValueChange = (value, { x, y }) => {
    const tempBoard = [...board];

    if (value.length === 1) tempBoard[y][x].number = value;
    setBoard(tempBoard);
  };

  return (
    <Box className={classes.continer}>
      <Box className={classes.grid}>
        {board.map((row) => {
          return row.map((cell) => {
            return (
              <Box className={classes.cell}>
                <Cell
                  postion={cell.position}
                  handleValueChange={handleCellValueChange}
                  value={cell.number}
                />
              </Box>
            );
          });
        })}
      </Box>
    </Box>
  );
};

const useStyles = makeStyles({
  continer: {
    width: "700px",
    height: "700",
    display: "flex",
    alignItems: "center",
    marginTop: "4%",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
  },
  cell: {
    height: "78px",
    width: "50px",
    flex: "1 5 11.1%",
  },
});

export default Board;
