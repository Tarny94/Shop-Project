import React, { useEffect, useState } from "react";
import "../styles/ProductCreation.scss";
import { useNavigate } from "react-router-dom";
import Input from "../Component/Input";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";

const ProductCreation = () => {
  const navigate = useNavigate();
  const [price, setPrice] = useState("");

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
          <div className="input-container">
            <Input
              type="text"
              label="Title"
              className="input-title input-width"
              endAdornment={null}
            />
          </div>
          <div className="input-container">
            <Input
              label="Description"
              className="input-description input-width"
              rows={4}
              multiline={true}
            />
          </div>
          <div className="input-container">
            <Input label="Brand" className="input-brand input-width" />
          </div>
          <div className="input-container">
            <Input label="Category" className="input-category input-width" />
          </div>
          <div className="input-container">
            <Input
              label="Thumnail "
              className="input-thumnail input-width"
              multiline={true}
            />
          </div>
          <div className="input-container">
            <div className="button-add-image">ADD</div>
            <Input
              label="Images"
              className="input-images input-width"
              multiline={true}
              endAdornment={<RemoveOutlinedIcon />}
            />{" "}
          </div>
        </div>
        <div></div>
        <div>
          <div className="input-container">
            <Input
              onChange={setPrice}
              price={price}
              label="Price $"
              type="number"
              className="input-price input-width"
            />
          </div>
          <div className="input-container">
            <Input
              type="number"
              label="Discount %"
              className="input-dicount input-width"
            />
          </div>
          <div className="input-container">
            <Input
              type="number"
              label="Rating"
              className="input-rating input-width"
            />
          </div>
          <div className="input-container">
            <Input
              type="number"
              label="Stock"
              className="input-stock input-width"
            />
          </div>
        </div>
        <div className="product-create-price">
          <div className="price-title">Price</div>
          <div className="price-container">$ {price}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCreation;