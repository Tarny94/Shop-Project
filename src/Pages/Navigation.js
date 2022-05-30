import { Route, Routes } from "react-router-dom";
import Product from "../Pages/Product";
import Products from "../Pages/Products";
import NotFound from "../Component/NoFound";
import Authentification from "./Authentification";
import ProductCreation from "./ProductCreation";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/admin/login" element={<Authentification />} />
      <Route path="/" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/admin" element={<ProductCreation />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Navigation;
