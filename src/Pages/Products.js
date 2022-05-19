import React, { useEffect, useState } from "react";
import { api } from "../Utils/Api";
import Card from "../Component/Card";

const Products = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    api.products.fetch().then((data) => {
      setProducts(data.data);
    });
  }, []);

  return (
    <div>
      <div className="containers">
        <Card />;
      </div>
    </div>
  );
};

export default Products;
