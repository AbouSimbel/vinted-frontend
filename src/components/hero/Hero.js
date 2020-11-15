import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";
import tear from "../../assets/img/bg/tear.svg"

const Hero = () => {
  return(
    <div className="hero">
      <div>
        <div>
          <p>Prêts à faire du tri dans vos placards ?</p>
          <button>Commencer à vendre</button>
          <Link><span>Découvrir comment ça marche</span></Link>
        </div>
        <img src={tear} alt=""/>
      </div>
    </div>
  )
}

export default Hero;