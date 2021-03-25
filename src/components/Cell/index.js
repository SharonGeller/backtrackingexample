import React from "react";
import { makeStyles, Box, Input } from "@material-ui/core";

const Cell = ({ value, postion, handleValueChange }) => {
  const classes = useStyles();

  return (
    <Box className={classes.continer}>
      <Box className={classes.continer}>
        <Input
          type={"number"}
          className={classes.text}
          disableUnderline
          value={value}
          onChange={({ target: { value } }) =>
            handleValueChange(value, postion)
          }
        />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles({
  continer: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",

    backgroundColor: "grey",
    borderStyle: "solid",
  },
  center: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  text: {
    marginLeft: "30px",
    width: "50%",
    height: "100%",
  },
});

export default Cell;
