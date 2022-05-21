import React, { useEffect, useState } from "react";
import { api } from "../Utils/Api";
import Card from "../Component/Card";
import axios from "axios";

const Products = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productSelected, setProductSelected] = useState();

  console.log(category);
  useEffect(() => {
    api.products.fetch().then((data) => {
      console.log(data.data.products);
      setProducts(data.data.products);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://dummyjson.com/products/category/${category ? category : null}`
      )
      .then((data) => {
        console.log(data.data);
        setProductSelected(data.data);
      });
  }, [category]);

  if (loading) {
    return <div>loading....</div>;
  }

  const getProductsByCategory = () => {};

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

  return (
    <div className="container">
      {!category ? getProducts() : getProductsByCategory()}
    </div>
  );
};

export default Products;
