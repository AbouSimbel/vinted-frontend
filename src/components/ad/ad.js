import React from "react";

const Ad = ({ title, handleTitleChange, description, handleDescriptionChange, brand, handleBrandChange, size, handleSizeChange, color, handleColorChange, condition, handleConditionChange, city, handleCityChange, price, handlePriceChange, handleFileChange, handleSubmit }) => {
  return(
    <div className="publish-bkg">

    <div className="publish container">
      <form onSubmit={handleSubmit}>
      <div>
        <h3>Vends ton article</h3>
      </div>
      <div>
        <div>
          <input
            type="file"
            onChange={handleFileChange}
            />
        </div>
      </div>
    <div>
      <div>
        <div>
          <h3>Titre</h3>
        </div>
        <div>
          <input
            placeholder="ex: Chemise verte"
            type="text"
            name="title"
            value={title}
            onChange={handleTitleChange}/>
        </div>
      </div>
      <div>
        <div>
          <h3>Decris ton article</h3>
        </div>
        <div>
          <input
            placeholder="ex: portee quelquesfois, taille correctement"
            type="textarea"
            name="description"
            value={description}
            onChange={handleDescriptionChange}/>
        </div>
      </div>
    </div>
    <div>
      <div>
        <div>
          <h3>Marque</h3>
        </div>
        <div>
          <input
            placeholder="ex: Zara"
            type="text"
            name="brand"
            value={brand}
            onChange={handleBrandChange}/>
        </div>
      </div>
      <div>
        <div>
          <h3>Taille</h3>
        </div>
        <div>
          <input
            placeholder="ex: L / 40 / 12"
            type="text"
            name="size"
            value={size}
            onChange={handleSizeChange}/>
        </div>
      </div>
      <div>
        <div>
          <h3>Couleur</h3>
        </div>
        <div>
          <input
            placeholder="blue"
            type="text"
            name="color"
            value={color}
            onChange={handleColorChange}/>
        </div>
      </div>
      <div>
        <div>
          <h3>Etat</h3>
        </div>
        <div>
          <input
            placeholder="ex: Neuf avec étiquette"
            type="text"
            name="condition"
            value={condition}
            onChange={handleConditionChange}/>
        </div>
      </div>
      <div>
        <div>
          <h3>Lieu</h3>
        </div>
        <div>
          <input
            placeholder="ex: Paris"
            type="text"
            name="city"
            value={city}
            onChange={handleCityChange}/>
        </div>
      </div>
    </div>
    <div>
      <div>
        <div>
          <h3>Prix</h3>
        </div>
        <div>
          <input
            placeholder="0,00"
            type="text"
            name="price"
            value={price}
            onChange={handlePriceChange}/>
        </div>
      </div>
      <div>
        <div>
        </div>
        <div>
          <input type="checkbox"/><span>Je suis interessé par les échanges</span>
        </div>
      </div>
    </div>
      <button type="submit">Ajouter</button>
      </form>
    </div>
  </div>
  )
}

export default Ad;