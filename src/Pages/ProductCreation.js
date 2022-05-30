import React, { useEffect } from "react";
import "../styles/ProductCreation.scss";
import { useNavigate } from "react-router-dom";

const ProductCreation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data.username === "" && data.password === "") {
      navigate("/admin/login");
    }
  }, []);
  return <div>ADMIN</div>;
};

export default ProductCreation;
