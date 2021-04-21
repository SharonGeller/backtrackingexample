import React from "react";
import { Box, Button, Slider, makeStyles } from "@material-ui/core";

const Panel = ({
  handleSolveClick,
  handlePlayClick,
  hanleSpeedChange,
  resetBoard,
  speed,
  isSolved,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.continer}>
      <Box className={classes.solveBox}>
        {!isSolved ? (
          <Button
            className={classes.button}
            color={"primary"}
            variant={"contained"}
            onClick={handleSolveClick}
          >
            solve
          </Button>
        ) : (
          <Button
            className={classes.button}
            color={"secondary"}
            variant={"contained"}
            onClick={resetBoard}
          >
            reset
          </Button>
        )}
      </Box>
      {isSolved && (
        <Box className={classes.playBox}>
          <Button
            className={classes.button}
            color={"primary"}
            variant={"contained"}
            onClick={handlePlayClick}
          >
            play
          </Button>
          <Slider
            className={classes.slider}
            value={speed}
            min={1}
            max={2000}
            onChange={hanleSpeedChange}
          />
        </Box>
      )}
    </Box>
  );
};

const useStyles = makeStyles({
  continer: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
  },
  solveBox: {
    marginRight: "20px",
  },
  playBox: {},
  button: {
    marginTop: "3%",
    marginRight: "20px",
  },
  slider: {
    width: "100px",
  },
});

export default Panel;
