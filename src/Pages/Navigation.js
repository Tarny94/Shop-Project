import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Product from "../Pages/Product";
import Products from "../Pages/Products";
import NotFound from "../Component/NoFound";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Navigation;
