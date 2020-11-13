import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = ({ setUser }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

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
      setUser(response.data.token);
      history.push("/")
    } catch (error) {
      console.log(error.message);
    }

  }

  return(
    <form onSubmit={handleSubmit}>
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
  )
}

export default Login;