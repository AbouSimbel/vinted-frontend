import React from "react";
import './App.css';
import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Offer from "./containers/Offer"
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/offer/:id">
          <Offer/>
        </Route>

        <Route path="/signup">
          <SignUp/>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>



        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
      );
}

export default App;
