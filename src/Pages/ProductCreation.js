import React, { useContext, useEffect, useState } from "react";
import "../styles/ProductCreation.scss";
import { api } from "../Utils/Api";
import Input from "../Component/Input";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import Button from "../Component/Button";
import Select from "../Component/Select";
import { CreateProductsContext } from "./CreateProductProvider";

const ProductCreation = () => {
  const { setCategory, setPrice, price, category } = useContext(
    CreateProductsContext
  );

  const [options, setOptions] = useState();

  useEffect(() => {
    api.categories.fetch().then((data) => {
      setOptions(data.data);
    });
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
            />
          </div>
          <div className="input-container">
            <Input
              label="Description"
              className="input-description input-width"
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
              label="Thumnail"
              className="input-thumnail input-width"
              multiline={true}
            />
          </div>
          <div className="input-container">
            <div className="container-image">
              <Button className="button-add-image" title="ADD" />
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
      <div className="button-add-contain">
        <Button className="button-add" title={"ADD Product"} />
      </div>
    </div>
  );
};

export default ProductCreation;
