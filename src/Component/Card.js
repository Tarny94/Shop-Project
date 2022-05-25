import React from "react";
import "../styles/Card.scss";
import Rating from "./Rating";

import { Link } from "react-router-dom";

const Card = ({
  image,
  title,
  description,
  price,
  rating,
  id,
  titleProduct,
}) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <h2 className="card-detail title">{title}</h2>
      <p className="card-detail description">{description}</p>
      <h3 className="card-detail card-price">{price}$</h3>
      <Rating readOnly value={rating} className="card-rating" />
      <Link
        to={`/product/${id}`}
        className="card-detail view-product card-link"
      >
        {titleProduct}
      </Link>
    </div>
  );
};

export default Card;
