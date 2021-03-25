import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import SudokuSolver from "./SudokuSolver";

const Routes = () => {
  return (
    <Switch>
      <Route path="/board" component={SudokuSolver} />
      <Redirect to="/board" />
    </Switch>
  );
};

export default Routes;
