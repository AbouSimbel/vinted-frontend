import React, { useState } from "react";
import SignUp_Submit from "../components/signup_submit/SignUp_Submit";

const SignUp = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


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

  const handleSubmit = event => {
    <SignUp_Submit/>
    event.preventDefault();
  }
console.log('username :' + username + "\n" + email + "\n" + password);

  return(
    <div className="signup">
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
        <input type="submit" value="S'inscrire"/>
      </form>
    </div>
  )
}

export default SignUp;