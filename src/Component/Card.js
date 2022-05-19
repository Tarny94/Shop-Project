import React, { useState } from "react";
import "../styles/Card.scss";

const Card = ({ produs }) => {
  return (
    <div className="card-contains">
      <div className="card-image">
        <img alt="Image" />
      </div>
      <h2 className="card-detail title">Title</h2>
      <p className="card-detail description">Description</p>
      <h3 className="card-detail price">Price</h3>
      <p className="card-detail rating">Rating</p>
      <h3 className="card-detail view-product">View Product</h3>
    </div>
  );
};

export default Card;
