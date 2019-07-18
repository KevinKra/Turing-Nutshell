import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Nav from "../Nav/Nav";
import NumberGuesser from "../../applications/NumberGuesser/NumberGuesser";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Nav} />
      <Route exact path="/" component={NumberGuesser} />
    </div>
  );
}

export default App;
