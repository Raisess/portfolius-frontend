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

// services
import { get } from './services/user.service';

const Router = () => {
  const [l, setL] = useState(false);
  const [userData, setUserData] = useState(false);
  const logged = localStorage.getItem('logged');

  useEffect(() => {
    if (logged) {
      setL(true);

      get(localStorage.getItem('username'))
        .then(data => {
          setUserData(data);
          console.log(data);
        });
    }
  }, [logged]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home logged={l} userData={userData} />
        </Route>
        <Route path="/projects">
          <Projects logged={l} userData={userData} />
        </Route>
        <Route path="*">
          <NoMatch logged={l} userData={userData} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;