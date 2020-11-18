import axios from "axios";
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Header from "../components/header/Header";

const SignUp = ({ setUser }) => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleUsernameChange = event => {
    const value = event.target.value;
    setUsername(value);
  }

  const handleEmailChange = event => {
    const value = event.target.value;
    setEmail(value);
  }

  const handlePasswordChange = event => {
    const value = event.target.value;
    setPassword(value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
        try {
          const response = await axios.post(
            "https://lereacteur-vinted-api.herokuapp.com/user/signup", {
              username: username,
              password: password,
              email: email
            }
          );
          setUser(response.data.token, response.data._id);
          history.push("/")
        } catch (error) {
          console.log(error.message);
        }
  }
  return(
    <>
    <Header/>
    <div className="signup">
      <span>S'inscrire</span>
      <form onSubmit={handleSubmit} id="signupForm">
        <input
        placeholder="Nom d'utilisateur"
        type="text"
        name="username"
        value={username}
        onChange={handleUsernameChange}
        />
        <input
        placeholder="Email"
        type="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        />
        <input
        placeholder="Mot de passe"
        type="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
        />
        <button type="submit">S'inscrire</button>
      </form>
      <Link to="/login"><span></span><span classNAme="login">Tu as déjà un compte ? Connecte-toi !</span></Link>
    </div>
    </>
  )
}

export default SignUp;