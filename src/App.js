import React, { useState } from "react";
import './App.css';
import { BrowserRouter as  Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './containers/Home';
import Offer from "./containers/Offer"
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";
import Cookie from "js-cookie";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Publish from "./containers/Publish";
library.add(faSearch);

function App() {

  const [token, setToken ] = useState(Cookie.get("userToken") || null);

  const setUser = (token) => {
    if (token) {
      Cookie.set("userToken", token);
      setToken(token);
    } else {
      Cookie.remove("userToken");
      setToken(null);
    }
  }
  return (
    <Router>
      <Switch>

        <Route path="/offer/:id">
          <Offer token={token} setUser={setUser}/>
        </Route>

        <Route path="/signup">
          <SignUp setUser={setUser}/>
        </Route>

        <Route path="/login">
          <Login setUser={setUser}/>
        </Route>

        <Route path="/publish">
        {!token ? <Redirect to="/login"/> : <Publish token={token} setUser={setUser}/> }
        </Route>

        <Route path="/">
          <Home token={token} setUser={setUser}/>
        </Route>

      </Switch>
    </Router>
      );
}

export default App;
