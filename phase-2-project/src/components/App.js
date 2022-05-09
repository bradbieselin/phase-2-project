import React from 'react';
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from './Home';
import Challenge from './Challenge';


function App() {
  return (
    <div className="App">
      <h1>Challenges</h1>
      <NavBar />

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/challenge/:challengeType">
          <Challenge />
        </Route>

        <Route path="*">
          <h1>404 not found</h1>
        </Route>

      </Switch>
      
    </div>
  );
}

export default App;
