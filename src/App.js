import React, { useState } from "react";
import './App.css';
import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Offer from "./containers/Offer"
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";
import Cookie from "js-cookie";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Publish from "./containers/Publish";
import Payment from "./containers/Payment";
library.add(faSearch);

function App() {

  const [token, setToken] = useState(Cookie.get("userToken") || null);
  const [userId, setId] = useState(Cookie.get("userId") || null);

  const setUser = (token, userId) => {
    if (token) {
      Cookie.set("userToken", token);
      Cookie.set("userId", userId)
      setToken(token);
      setId(userId);
    } else {
      Cookie.remove("userToken");
      Cookie.remove("userId");
      setToken(null);
      setId(null);
    }


  }
  return (
    <Router>
      <Switch>

        <Route path="/offer/:id">
          <Offer token={token} setUser={setUser} userId={userId}/>
        </Route>

        <Route path="/signup">
          <SignUp setUser={setUser}/>
        </Route>

        <Route path="/login">
          <Login setUser={setUser}/>
        </Route>

        <Route path="/publish">
          <Publish token={token} setUser={setUser} userId={userId}/>
        </Route>

        <Route path="/payment">
          <Payment token={token} setUser={setUser} userId={userId}/>
        </Route>

        <Route path="/">
          <Home token={token} setUser={setUser} userId={userId}/>
        </Route>

      </Switch>
    </Router>
      );
}

export default App;
