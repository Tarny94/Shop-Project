import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../Utils/Api";
import "../styles/Product.scss";
import Rating from "../Component/Rating";
import Price from "../Component/Price";
import ImagesProduct from "../Component/ImagesProduct";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [numberOfRating, setNumberOfRating] = useState();

  useEffect(() => {
    setNumberOfRating(Math.trunc(Math.random() * 100));
  }, [id]);

  useEffect(() => {
    api.products.getById(id).then((data) => {
      console.log(data.data);
      setProduct(data.data);
    });
  }, [id]);

  return (
    <div className="product-contained">
      <ImagesProduct images={product.images} title={product.title} key={id} />
      <div className="product-details">
        {product && (
          <div className="product-rating">
            <Rating value={product.rating} />
            <div className="number-rating">({numberOfRating})</div>
          </div>
        )}

        <h1 className="product-title">{product.title}</h1>
        <Price price={product.price} dicount={product.discountPercentage} />
        <div className="add-card">ADD TO CARD</div>
        <h3 className="stock">Stock left: {product.stock}</h3>
        <p className="product-description">
          Description: {product.description}{" "}
        </p>
      </div>
    </div>
  );
};

export default Product;
