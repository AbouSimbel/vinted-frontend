import React from "react";
import "./header.css"
import { Link } from "react-router-dom"
import logo from "../../../src/assets/img/logo.png"

const Header = ({ token, setUser }) => {
  return(
    <div className="header container">
      <img src={logo} alt=""/>
        <input type="search"/>
        {!token ? (
          <div classNAme="connect">
          <Link to="/signup"><button>S'inscrire</button></Link>
          <Link to="/login"><button>Connection</button></Link>
        </div>
        ) : (
          <button
            onClick={() => {
              setUser(null)
            }}>
            Se déconnecter
          </button>
        )
      }
    </div>
  )
}

export default Header;