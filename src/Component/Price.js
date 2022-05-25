import React, { useEffect, useState } from "react";
import "../styles/Price.scss";

const Price = ({ price, dicount }) => {
  const [oldPrice, setOldPrice] = useState();

  useEffect(() => {
    setOldPrice(Math.trunc((price * dicount) / 100 + price));
  }, [price, dicount]);

  return (
    <div className="product-prices-contained">
      {price && dicount && <h4 className="old-price">$ {oldPrice}</h4>}
      <div className="price-discount">
        <h1 className="price">$ {price}</h1>
        <p className="discount">(-{dicount}%)</p>
      </div>
    </div>
  );
};

export default Price;
