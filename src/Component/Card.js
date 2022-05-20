import React, { useState } from "react";
import "../styles/Card.scss";

const Card = ({ image, title, description, price, rating }) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={image} alt="Image" />
      </div>
      <h2 className="card-detail title">{title}</h2>
      <p className="card-detail description">{description}</p>
      <h3 className="card-detail price">{price}</h3>
      <h4 className="card-detail rating">{rating}</h4>
      <h3 className="card-detail view-product">View Product</h3>
    </div>
  );
};

export default Card;
