import React, { createContext, useState, useEffect } from "react";
import { api } from "../Utils/Api";

const initialState = {
  category: "",
  query: "",
  loading: true,

  setCategory: () => {},
  setQuery: () => {},
  setLoading: () => {},
};

export const ProductsContext = createContext(initialState);
export const ProductsProvider = (props) => {
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const fetchProductsByQuery = () => {
    api.products.fetchByName(query).then((data) => {
      setProducts(data.data.products);
      setLoading(false);
    });
  };

  useEffect(() => {
    if (category === "") {
      if (query === "") {
        fetchProducts();
      } else {
        fetchProductsByQuery();
      }
    } else {
      fetchProductsByCategory();
    }
  }, [category, query]);

  return (
    <ProductsContext.Provider
      value={{
        category,
        query,
        setCategory,
        setQuery,
        products,
        loading,
        setProducts,
        setLoading,
      }}
      {...props}
    />
  );
};
