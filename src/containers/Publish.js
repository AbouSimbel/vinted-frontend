import React, { useState } from "react";
import Header from "../components/header/Header"
import Ad from "../components/ad/ad";
import "../components/ad/ad.css";
import axios from "axios";
import Cookies from "js-cookie";
import { Redirect, useHistory } from "react-router-dom";

const Publish = ({ token, setUser, userId }) => {

  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [brand, setBrand] = useState(null);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [condition, setCondition] = useState(null);
  const [city, setCity] = useState(null);
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const token2 = Cookies.get("userToken");
  const history = useHistory();

  const handleTitleChange = (event) => {
    const value = event.target.value;
    setTitle(value);
  }

  const handleDescriptionChange = (event) => {
    const value = event.target.value;
    setDescription(value);
  }

  const handleBrandChange = (event) => {
    const value = event.target.value;
    setBrand(value);
  }

  const handleSizeChange = (event) => {
    const value = event.target.value;
    setSize(value);
  }

  const handleColorChange = (event) => {
    const value = event.target.value;
    setColor(value);
  }

  const handleConditionChange = (event) => {
    const value = event.target.value;
    setCondition(value);
  }

  const handleCityChange = (event) => {
    const value = event.target.value;
    setCity(value);
  }

  const handlePriceChange = (event) => {
    const value = event.target.value;
    setPrice(value);
  }

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
      try {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("brand", brand);
        formData.append("size", size);
        formData.append("color", color);
        formData.append("condition", condition);
        formData.append("city", city);
        formData.append("price", Number(price));
        formData.append("picture", file);

        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
            formData,
            {
              headers: {
                authorization: "Bearer " + token2,
              }
            }
        );
        history.push("/")
      } catch (error) {
        alert("Publish failed")
        console.log(error.message);
      }
  }
  return token ? (
      <>
      <Header token={token} setUser={setUser} userId={userId}/>
      <Ad
      title={title}
      handleTitleChange={handleTitleChange}
      description={description}
      handleDescriptionChange={handleDescriptionChange}
      brand={brand}
      handleBrandChange={handleBrandChange}
      size={size}
      handleSizeChange={handleSizeChange}
      color={color}
      handleColorChange={handleColorChange}
      condition={condition}
      handleConditionChange={handleConditionChange}
      city={city}
      handleCityChange={handleCityChange}
      price={price}
      handlePriceChange={handlePriceChange}
      handleFileChange={handleFileChange}
      handleSubmit={handleSubmit}
      />
      </>
      ) : (
        <Redirect to={{
          pathname: "/login",
          state: { fromPublish: true },
        }}
        />
      )
      }

export default Publish;