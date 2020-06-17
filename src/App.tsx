import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Selecting from "./Selecting";
import Styled from "./Styled";

const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/selecting">
        <Selecting />
      </Route>
      <Route exact path="/styled">
        <Styled></Styled>
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
