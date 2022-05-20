import React, { useEffect, useState } from "react";
import { api } from "../Utils/Api";
import Card from "../Component/Card";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.products.fetch().then((data) => {
      console.log(data.data.products);
      setProducts(data.data.products);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>loading....</div>;
  }

  const getProducts = () =>
    products.map((data) => (
      <Card
        image={data.thumbnail}
        title={data.title}
        description={data.description}
        price={data.price}
        rating={data.rating}
        key={data.id}
      />
    ));

  return <div className="container">{getProducts()}</div>;
};

export default Products;
