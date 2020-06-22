import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

// views
import Home from './views/home.view';
import Projects from './views/projects.view';
import NoMatch from './views/404.view';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;