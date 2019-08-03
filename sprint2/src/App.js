import React from "react";
// import logo from "./logo.svg";

import Main from "./components/Main/Main.js";
import Upload from "./components/Upload/Upload";

import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/upload" component={Upload} />
        <Route path="/video/:id" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
