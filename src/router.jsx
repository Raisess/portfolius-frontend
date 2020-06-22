import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

// views
import Home from './views/home.view';
import Login from './views/login.view';
import Projects from './views/projects.view';
import NoMatch from './views/404.view';

const Router = () => {
  const [l, setL] = useState(false);
  const logged = localStorage.getItem('logged');

  useEffect(() => {
    if (logged) {
      setL(true)
    }
  }, [logged]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home logged={l} />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/projects">
          <Projects logged={l} />
        </Route>
        <Route path="*">
          <NoMatch logged={l} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;