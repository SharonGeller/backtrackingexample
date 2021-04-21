import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  makeStyles,
} from "@material-ui/core";

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box className={classes.toolbar}>
          <Typography>Back Tracking Sudoku Solver</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
  },
});

export default NavBar;
