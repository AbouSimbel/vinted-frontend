import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"
import axios from "axios";
import Header from "../components/header/Header";
import useravat from "../assets/img/bg/useravt.png"

const Offer = ({ token, setUser, userId }) => {

  const { id } = useParams("");
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);

useEffect(() => {
const fetchData = async () => {
  try {
    const response = await axios.get(`https://lereacteur-vinted-api.herokuapp.com/offer/${id}`);
    setData(response.data);
    setisLoading(false);

  } catch (error) {
    console.log(error.message);
  }
};
  fetchData();
}, [id]);

  return isLoading ? (
    <p className="loading-page">Page en cours de chargement</p>
  ) : (
    <>
    <Header token={token} setUser={setUser} userI={userId}/>
    <div className="offer-bkg">
    <div className="offer container">
      <img src={data.product_image.secure_url} alt=""/>
      <div className="offer-resume">
        <div className="price2">{data.product_price} €</div>
      <div className="details">
        {data.product_details.map((item, index) => {
          const keys = Object.keys(item);
          return(
            <div>
              <div>
              {keys[0]}
              </div>
              <div className="details-values">
              {item[keys[0]]}
              </div>
              </div>
          )
        })}
      </div>
      <hr/>
      <p className="offer-name">{data.product_name}</p>
      <p>{data.product_description}</p>
      <p className="owner">
        <img src={data.owner.account.avatar ? data.owner.account.avatar.secure_url : useravat } alt=""/>
        <span>{data.owner.account.username}</span>
      </p>
      <Link to={{
              pathname: "/payment",
              state: {
                token: token,
                title: data.product_name,
                amount: data.product_price,
                fromPayment: true,
              },
              }}
              >
                <button className="buy">Acheter</button></Link>
      </div>
    </div>
    </div>
    </>
  )
}

export default Offer;