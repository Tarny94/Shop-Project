import React, { useEffect } from "react";
import "../styles/ProductCreation.scss";
import { useNavigate } from "react-router-dom";
import Input from "../Component/Input";

const ProductCreation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data.username === "" && data.password === "") {
      navigate("/admin/login");
    }
  }, []);
  return (
    <div className="product-creation-contained">
      <div>
        <div className="product-creation-name creation">
          <h1>Create Product</h1>
        </div>
        <div className="creation">
          <Input type="text" label="Title" />
        </div>
        <div className="creation">
          <Input label="Description" />
        </div>
        <div className="creation">
          <Input label="Price $" type="number" />
        </div>
        <div className="creation">
          <Input type="number" label="Discount Percentage %" />
        </div>
        <div className="creation">
          <Input type="number" label="Rating" />
        </div>
        <div className="creation">
          <Input type="number" label="Stock" />
        </div>
        <div className="creation">
          <Input label="Brand" />
        </div>
        <div className="creation">
          <Input label="Category" />
        </div>
        <div className="creation">
          <Input label="Thumnail" />
        </div>
        <div className="creation">
          <Input label="Images" />
        </div>
        <div className="creation">
          <Input type="number" label="ID" />
        </div>
      </div>
    </div>
  );
};

export default ProductCreation;
