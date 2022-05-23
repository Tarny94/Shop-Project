import React, { useEffect, useState } from "react";
import { api } from "../Utils/Api";
import Card from "../Component/Card";

import { Loading } from "../Component/Loading";

const Products = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (category === "") {
      fetchProducts();
    } else {
      fetchProductsByCategory();
    }
  }, [category]);

  const fetchProducts = () => {
    api.products.fetch().then((data) => {
      setProducts(data.data.products);
      setLoading(false);
    });
  };

  const fetchProductsByCategory = () => {
    api.products.fetchByCategory(category).then((data) => {
      setProducts(data.data.products);
      setLoading(false);
    });
  };

  if (loading) {
    <Loading loading={Loading} />;
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
