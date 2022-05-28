import { Route, Routes } from "react-router-dom";
import Product from "../Pages/Product";
import Products from "../Pages/Products";
import NotFound from "../Component/NoFound";
import Authentification from "./Authentification";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/admin/login" element={<Authentification />} />
      <Route path="/" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/admin" />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Navigation;
