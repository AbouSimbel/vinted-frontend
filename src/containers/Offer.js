import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import Header from "../components/header/Header";
import Offer_ from "../components/offer_/Offer_";



const Offer = () => {

  const { id } = useParams();
  const [data, setData] = useState();
const [isLoading, setisLoading] = useState(true);

const fetchData = async () => {
  try {
    const response = await axios.get(`https://lereacteur-vinted-api.herokuapp.com/offer/${id}`);
    setData(response.data);
    setisLoading(false);
  } catch (error) {
    console.log(error.message);
  }
};

useEffect(() => {
  fetchData();
}, []);

console.log(data);



  return isLoading ? (
    <p className="loading-page">Page en cours de chargement</p>
  ) : (
    <>
    <Header/>
    <Offer_/>
    </>
  )
}

export default Offer;