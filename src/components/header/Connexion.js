import React from "react";
import { Link } from "react-router-dom"

const Connexion = () => {
  return(
    <div className="connexion">

    <Link to="/login">
      <button>Connection</button>
    </Link>
    </div>
  )
}

export default Connexion;
