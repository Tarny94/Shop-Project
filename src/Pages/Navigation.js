import { Route, Routes } from "react-router-dom";
import Product from "../Pages/Product";
import Products from "../Pages/Products";
import NotFound from "../Pages/NotFound";
import Filter from "./Filter";
import { ProductsProvider } from "../Pages/ProductsProvider";
import ProductCreation from "./ProductCreation";
import Authentification from "./Authentification";
import { CreateProductProvider } from "./CreateProductProvider";

const ProductNavigation = () => {
  return (
    <ProductsProvider>
      <Filter />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ProductsProvider>
  );
};

const AdminNavigation = () => {
  return (
    <CreateProductProvider>
      <Routes>
        <Route path="/" element={<ProductCreation />} />
        <Route path="/login" element={<Authentification />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CreateProductProvider>
  );
};

const Navigation = () => {
  return (
    <Routes>
      <Route path="/*" element={<ProductNavigation />} />
      <Route path="/admin/*" element={<AdminNavigation />} />
    </Routes>
  );
};

export default Navigation;
