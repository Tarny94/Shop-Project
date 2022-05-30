import { Route, Routes } from "react-router-dom";
import Product from "../Pages/Product";
import Products from "../Pages/Products";
import NotFound from "../Component/NoFound";
import Filter from "./Filter";
import { ProductsProvider } from "../Pages/ProductsProvider";
import ProductCreation from "./ProductCreation";
import Authentification from "./Authentification";

const Navigation = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ProductsProvider>
                <Filter /> <Products />
              </ProductsProvider>
            </>
          }
        />
        <Route
          path="/product/:id"
          element={
            <>
              <ProductsProvider>
                <Filter /> <Product />
              </ProductsProvider>
            </>
          }
        />
        <Route path="/admin" element={<ProductCreation />} />
        <Route path="/admin/login" element={<Authentification />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Navigation;
