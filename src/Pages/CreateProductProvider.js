import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  category: "",
  query: "",
  loading: true,
  price: "",

  setCategory: () => {},
  setQuery: () => {},
  setPrice: () => {},
};

export const CreateProductsContext = createContext(initialState);
export const CreateProductProvider = (props) => {
  const navigate = useNavigate();
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));

    if (data.username === "" && data.password === "") {
      navigate("/admin/login");
    }
  }, []);

  return (
    <CreateProductsContext.Provider
      value={{
        category,
        price,
        setCategory,

        setPrice,
      }}
      {...props}
    />
  );
};
