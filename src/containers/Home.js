import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Navigation from "../components/navigation/Navigation";
import Offers from "../components/offers/Offers";
import axios from "axios";

const Home = () => {

const [data, setData] = useState({});
const [isLoading, setisLoading] = useState(true);

const fetchData = async () => {
  try {
    const response = await axios.get("https://lereacteur-vinted-api.herokuapp.com/offers");
    setData(response.data);
    setisLoading(false);
  } catch (error) {
    console.log(error.message);
  }
};
//Remonter le useEffect pour le mettre directement autour de la creation de fetchData ?
useEffect(() => {
  fetchData();
}, []);

  return isLoading ? (
    <p className="loading-page">Page en cours de chargement</p>
  ) : (

    <>
      <Header/>
      <Navigation/>
      <Hero/>
      <Offers offers={data.offers}/>
    </>
)
}

export default Home;