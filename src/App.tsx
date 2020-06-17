import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Selecting from "./Selecting";

const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/selecting">
        <Selecting />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
