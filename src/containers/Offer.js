import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import Header from "../components/header/Header";



const Offer = () => {

  const { id } = useParams();
  const [data, setData] = useState();
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

console.log(data);

  return isLoading ? (
    <p className="loading-page">Page en cours de chargement</p>
  ) : (
    <>
    <Header/>
    <div className="offer">
      <img src={data.product_image.secure_url} alt=""/>
      <div className="offer-resume">
      <div className="price">{data.product_price}</div>
      </div>


    </div>
    </>
  )
}

export default Offer;