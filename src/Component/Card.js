import React from "react";
import "../styles/Card.scss";
import Rating from "./Rating";

const Card = ({ image, title, description, price, rating }) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <h2 className="card-detail title">{title}</h2>
      <p className="card-detail description">{description}</p>
      <h3 className="card-detail price">{price}$</h3>
      <Rating value={rating} className="rating" />
      <h3 className="card-detail view-product">View Product</h3>
    </div>
  );
};

export default Card;
