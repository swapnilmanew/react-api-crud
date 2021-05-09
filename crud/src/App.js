import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Index from "./components/Index";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/add" component={Add} />
          <Route exact path="/" component={Index} />
          <Route exact path="/edit" component={Edit} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
