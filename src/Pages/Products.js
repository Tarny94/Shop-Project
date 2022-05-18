import React, { useEffect } from "react";
import { api } from "../Utils/Api";
import Card from "../Component/Card";

const Products = () => {
  useEffect(() => {
    api.products.fetch().then((data) => {
      console.log(data.data);
    });
  }, []);

  return (
    <div className="containers">
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Products;
