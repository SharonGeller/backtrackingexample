import React from "react";
import { makeStyles, Box, Input } from "@material-ui/core";

const Cell = ({ value, postion, handleValueChange, color }) => {
  const classes = useStyles();

  const getColor = () => {
    const colors = {
      default: "grey",
      selected: "green",
    };

    return { backgroundColor: colors[color] };
  };

  return (
    <Box className={classes.continer} style={getColor()}>
      <Input
        type={"number"}
        className={classes.text}
        disableUnderline
        value={value}
        onChange={({ target: { value } }) => handleValueChange(value, postion)}
      />
    </Box>
  );
};

const useStyles = makeStyles({
  continer: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    borderStyle: "solid",
  },
  text: {
    marginLeft: "30px",
    width: "50%",
    height: "100%",
  },
});

export default Cell;
