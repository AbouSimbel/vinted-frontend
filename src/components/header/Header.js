import React from "react";
import Connexion from "./Connexion";
import SignUp from "./SignUp";
import "./header.css"
import SellArticles from "./SellArticles";


const Header = () => {
  return(
    <div className="header container">
      <div className="logo">LOGO VINTED</div>
      <input type="search"/>
      <div classNAme="connect">
      <SignUp/>
      <Connexion/>
      </div>
      <SellArticles/>
    </div>
  )
}

export default Header;