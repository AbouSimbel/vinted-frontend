import React from "react";
import "./header.css"
import { Link } from "react-router-dom"
import logo from "../../../src/assets/img/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ token, setUser }) => {
  return(
    <div className="header container">
      <Link to="/"><img src={logo} alt=""/></Link>
        <div className="search-area">
          <FontAwesomeIcon className="icon" icon="search"/>
          <input className="search" type="search" placeholder="Recherche des articles"/>
        </div>
        {!token ? (
          <div className="connect">
            <Link to="/signup"><button>S'inscrire</button></Link>
            <Link to="/login"><button>Connection</button></Link>
          </div>
        ) : (
          <button
            onClick={() => {
              setUser(null, null)
            }}>
            Se déconnecter
          </button>
        )
      }
      <Link to="/publish"><button className="sell">Vends tes articles</button></Link>
    </div>
  )
}

export default Header;