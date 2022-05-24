import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "../Pages/Product";
import Products from "../Pages/Products";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
};

export default Navigation;
