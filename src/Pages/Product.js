import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../Utils/Api";
import "../styles/Product.scss";
import Rating from "../Component/Rating";
import Price from "../Component/Price";
import Carousel from "../Component/Carousel";
import NotFound from "../Component/NoFound";
import { Loading } from "../Component/Loading";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [numberOfRatings, setNumberOfRatings] = useState();

  useEffect(() => {
    setNumberOfRatings(Math.trunc(Math.random() * 100));
  }, []);

  useEffect(() => {
    api.products.getById(id).then((data) => {
      setProduct(data.data);
    });
  }, [id]);

  const getProduct = () => {
    if (product.id == id) {
      return (
        <div className="product-container">
          <Carousel
            images={product.images}
            title={product.title}
            key={id}
            infiniteLoo
          />
          <div className="product-details">
            {product && (
              <div className="product-rating">
                <Rating value={product.rating} />
                <div className="number-rating">({numberOfRatings})</div>
              </div>
            )}

            <h1 className="product-title">{product.title}</h1>
            <Price
              price={product.price}
              discount={product.discountPercentage}
            />
            <h3 className="add-card">ADD TO CARD</h3>
            <h3 className="stock">Stocks: {product.stock}</h3>

            <p className="product-description">{product.description} </p>
          </div>
        </div>
      );
    } else {
      if (id) {
        return (
          <div>
            <Loading />
          </div>
        );
      }
    }
  };

  return <div>{id ? getProduct() : <NotFound />}</div>;
};

export default Product;
