import React, { useContext } from "react";
import Card from "../Component/Card";
import { Loading } from "../Component/Loading";
import { ProductsContext } from "./ProductsProvider";

const Products = () => {
  const { products, loading } = useContext(ProductsContext);

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
        id={data.id}
        viewProduct="View Product"
      />
    ));

  return <div className="container">{getProducts()}</div>;
};

export default Products;
