import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  category: "",
  loading: true,
  price: "",
  title: "",
  description: "",
  brand: "",
  thumnail: "",
  stock: "",
  addImage: "",
  images: [],

  setCategory: () => {},
  setPrice: () => {},
  setDescription: () => {},
  setTitle: () => {},
  setBrand: () => {},
  setThumbnail: () => {},
  setStock: () => {},
  setAddImage: () => {},
};

export const CreateProductsContext = createContext(initialState);
export const CreateProductProvider = (props) => {
  const navigate = useNavigate();
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [thumnail, setThumbnail] = useState("");
  const [stock, setStock] = useState("");
  const [addImage, setAddImage] = useState("");
  const images = [];

  const handleAddProduct = () => {
    console.log(addProduct);
  };

  const addProduct = {
    title,
    description,
    price,
    stock,
    brand,
    category,
    thumnail,
    images,
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));

    if (!data) {
      navigate("/admin/login");
    }
  }, []);

  return (
    <CreateProductsContext.Provider
      value={{
        category,
        price,
        description,
        title,
        brand,
        thumnail,
        stock,
        addImage,
        handleAddProduct,

        setCategory,
        setPrice,
        setTitle,
        setDescription,
        setBrand,
        setThumbnail,
        setAddImage,
        setStock,
        images,
      }}
      {...props}
    />
  );
};
