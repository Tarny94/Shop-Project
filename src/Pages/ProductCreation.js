import React, { useEffect, useState } from "react";
import "../styles/ProductCreation.scss";
import { useNavigate } from "react-router-dom";
import Input from "../Component/Input";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import Button from "../Component/Button";
import Select from "../Component/Select";
import { api } from "../Utils/Api";

const ProductCreation = () => {
  const navigate = useNavigate();
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [options, setOptions] = useState();

  useEffect(() => {
    api.categories.fetch().then((data) => {
      setOptions(data.data);
    });
  }, []);

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
            <Select
              label="Category"
              className="input-category input-width"
              value={category}
              options={options}
              onChange={setCategory}
            />
          </div>
          <div className="input-container">
            <Input
              label="Thumnail "
              className="input-thumnail input-width"
              multiline={true}
            />
          </div>
          <div className="input-container">
            <button className="button-add-image">ADD</button>
            <Input
              label="Images"
              className="input-images input-width"
              multiline={true}
              endAdornment={
                <RemoveOutlinedIcon className="image-remove-icon" />
              }
            />
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
          <div className="button-add-contain">
            <Button className="button-add" title={"ADD Product"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCreation;
