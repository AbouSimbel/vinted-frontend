import React, { useState } from "react";
import './App.css';
import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Offer from "./containers/Offer"
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";
import Cookie from "js-cookie";



function App() {

  const [token, setToken ] = useState(Cookie.get("userToken") || null);
console.log(token);
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
          <Offer/>
        </Route>

        <Route path="/signup">
          <SignUp token={token} setUser={setUser}/>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>



        <Route path="/">
          <Home token={token} setUser={setUser}/>
        </Route>
      </Switch>
    </Router>
      );
}

export default App;
