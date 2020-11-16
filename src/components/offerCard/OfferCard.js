import React from "react";
import { Link } from "react-router-dom";
import "./offerCard.css"
import useravat from "../../assets/img/bg/useravt.png"

const OfferCard = ({ offer }) => {

  const useravt = offer.owner.account.avatar;

console.log(offer);
  return(
    <Link className="link" to={`/offer/${offer._id}`} key={offer._id}>
  <div className="offer-card">
    <div className="owner">
      <img src={useravt ? (offer.owner.account.avatar.secure_url) : useravat} alt=""/>

      <span>{offer.owner.account.username}</span>
    </div>
    <div className="offer-details">
      <img src={offer.product_image.secure_url} alt=""/>
      <div className="price">{offer.product_price} €</div>
      <p>{offer.product_details[1].TAILLE}</p>
      <p>{offer.product_details[0].MARQUE}</p>
    </div>
  </div>
  </Link>
  )
}

export default OfferCard;