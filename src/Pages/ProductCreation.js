import React, { useEffect, useState } from "react";
import "../styles/ProductCreation.scss";
import { useNavigate } from "react-router-dom";
import Input from "../Component/Input";
import AddIcon from "@mui/icons-material/Close";

const ProductCreation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data.username === "" && data.password === "") {
      navigate("/admin/login");
    }
  }, []);
  return (
    <div className="product-creation-container">
      <div className="product-creation-name">
        <h1>Create Product</h1>
      </div>
      <div className="product-inputs">
        <div>
          <div className="input-label">
            <Input
              type="text"
              label="Title"
              className="input-title input-width"
            />
          </div>
          <div className="input-label">
            <Input
              label="Description"
              className="input-description input-width"
              rows={4}
              multiline="multiline"
            />
          </div>
          <div className="input-label">
            <Input label="Brand" className="input-brand input-width" />
          </div>
        </div>
        <div>
          <div className="input-label">
            <Input label="Category" className="input-category input-width" />
          </div>
          <div className="input-label">
            <Input label="Thumnail " className="input-thumnail input-width" />
            <button className="add-button-thumnail">ADD</button>
          </div>
          <div className="input-label">
            <Input label="Images" className="input-images input-width" />
            <button className="add-button-image">ADD</button>
          </div>
        </div>
        <div>
          <div className="input-label">
            <Input
              label="Price $"
              type="number"
              className="input-price input-width"
            />
          </div>
          <div className="input-label">
            <Input
              type="number"
              label="Discount %"
              className="input-dicount input-width"
            />
          </div>
          <div className="input-label">
            <Input
              type="number"
              label="Rating"
              className="input-rating input-width"
            />
          </div>
          <div className="input-label">
            <Input
              type="number"
              label="Stock"
              className="input-stock input-width"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCreation;
