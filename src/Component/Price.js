import React, { useEffect, useState } from "react";
import "../styles/Price.scss";

const Price = ({ price, discount }) => {
  const [oldPrice, setOldPrice] = useState();

  useEffect(() => {
    setOldPrice(Math.trunc((price * discount) / 100 + price));
  }, [price, discount]);

  return (
    <div className="product-prices-contained">
      {discount ? <h4 className="old-price">$ {oldPrice}</h4> : ""}
      <div className="price-discount">
        <h1 className="price">$ {price}</h1>
        {discount ? <p className="discount">(-{discount}%)</p> : ""}
      </div>
    </div>
  );
};

export default Price;
