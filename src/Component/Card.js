import React from "react";
import "../styles/Card.scss";
import Rating from "./Rating";

import { Link } from "react-router-dom";

const Card = ({ image, title, description, price, rating, id }) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <h2 className="card-detail title">{title}</h2>
      <p className="card-detail descriptions">{description}</p>
      <h3 className="card-detail prices">{price}$</h3>
      <Rating readOnly value={rating} className="ratings" />
      <Link
        to={`/product/${id}`}
        className="card-detail view-product card-link"
      >
        View Product
      </Link>
    </div>
  );
};

export default Card;
