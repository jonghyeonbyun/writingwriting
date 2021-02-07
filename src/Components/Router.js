import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import Store from "Routes/Store";
import Vote from "Routes/Vote";
import Header from "Components/Header";
import Detail from "Routes/Detail";
import Display from "Routes/Display";
export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/display" exact component={Display} />
        <Route path="/vote" exact component={Vote} />
        <Route path="/store" component={Store} />
        <Route path="/goods/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
