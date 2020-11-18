import axios from "axios";
import React, { useState } from "react";
import { useHistory, Link, useLocation } from "react-router-dom";
import Header from "../components/header/Header"

const Login = ({ setUser, setUserId }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const location = useLocation();


  // Optional chaining (replace my previous if-condition)
  const fromPublish = location.state?.fromPublish ? true : false;
  const fromPayment = location.state?.fromPayment ? true : false;


  const title = location.state?.title ? location.state.title : null;
  const amount = location.state?.amount ? location.state.amount : null;

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  }

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://lereacteur-vinted-api.herokuapp.com/user/login", {
        email: email,
        password: password,
      }
      )

        setUser(response.data.token, response.data._id);

        fromPublish ? history.push("/publish") :
        fromPayment ? ( history.push({
          pathname: "/payment",
          state: {
            title: title,
            amount: amount,
          }
        })
        ) : history.push("/");

    } catch (error) {

      alert("Login failed")
      console.log(error.message);
    }
  }
  return(
    <>
    <Header/>
    <div className="signup">
      <span>Se connecter</span>
    <form onSubmit={handleSubmit} id="signupForm">

    <input
      type="email"
      placeholder="Adresse email"
      value={email}
      onChange={handleEmailChange}/>

    <input
      type="password"
      placeholder="Mot de passe"
      name="password"
      value={password}
      onChange={handlePasswordChange}/>

      <button
      type="submit">Se connecter</button>
      </form>
      <Link to="/signup"><span></span><span className="login">Pas encore de compte ? Inscrit-toi !</span></Link>
      </div>
      </>
  )
}

export default Login;