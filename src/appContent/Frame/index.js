import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import NavBar from "./NavBar";

const Frame = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.continer}>
      <NavBar />
      {children}
    </Box>
  );
};

const useStyles = makeStyles({
  continer: {
    backgroundColor: "#282c34",
    width: "100%",
    height: "100vh",
    overflow: "auto",
  },
});

export default Frame;
