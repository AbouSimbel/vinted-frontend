import React from "react";
import "./navigation.css"
import "../../App.css"

const Navigation = () => {
  return(
    <>
    <hr/>
      <nav className="navigation container">
        <ul>
          <li>Femmes</li>
          <li>Hommes</li>
          <li>Enfants</li>
          <li>Maison</li>
          <li>À propos</li>
          <li>Notre plateforme</li>
        </ul>
      </nav>
      </>
  )
}

export default Navigation;