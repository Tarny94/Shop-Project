import React, { useContext, useEffect } from "react";
import Card from "../Component/Card";
import { Loading } from "../Component/Loading";
import { ProductsContext } from "./ProductsProvider";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const { products, loading, isLogin } = useContext(ProductsContext);
  const navigate = useNavigate();
  if (loading) {
    <Loading loading={Loading} />;
  }

  if (!isLogin) {
    navigate("/admin/login");
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
        titleProduct="View Product"
      />
    ));

  return <div className="container">{getProducts()}</div>;
};

export default Products;
