import React, { useEffect, useState } from "react";
import "../styles/Card.scss";
import Rating from "./Rating";
import Product from "../Pages/Product";
import { Link } from "react-router-dom";

const Card = ({ image, title, description, price, rating, id }) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <h2 className="card-detail title">{title}</h2>
      <p className="card-detail description">{description}</p>
      <h3 className="card-detail price">{price}$</h3>
      <Rating value={rating} className="rating" />
      <Link to={`/product/${id}`} className="card-detail view-product">
        View Product
      </Link>
    </div>
  );
};

export default Card;
