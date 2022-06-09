import React, { useContext, useEffect, useState } from "react";
import "../styles/ProductCreation.scss";
import { api } from "../Utils/Api";
import Input from "../Component/Input";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import Button from "../Component/Button";
import Select from "../Component/Select";
import { CreateProductsContext } from "./CreateProductProvider";

const ProductCreation = () => {
  const {
    setCategory,
    setPrice,
    price,
    category,
    handleAddProduct,
    title,
    description,
    stock,
    brand,
    thumbnail,
    addImages,
    setTitle,
    setDescription,
    setStock,
    setBrand,
    setThumbnail,
    setAddImages,
    images,
  } = useContext(CreateProductsContext);
  const [options, setOptions] = useState();
  const [listInput, setListInput] = useState([
    {
      newdata: (
        <Input
          label="Images"
          className="input-images input-width"
          multiline={true}
          endAdornment={<RemoveOutlinedIcon className="image-remove-icon" />}
          onChange={setAddImages}
          value={addImages}
        />
      ),
    },
  ]);

  const addInputField = () => {
    setListInput([
      ...listInput,
      {
        newdata: (
          <Input
            label="Images"
            className="input-images input-width"
            multiline={true}
            endAdornment={<RemoveOutlinedIcon className="image-remove-icon" />}
            onChange={setAddImages}
            value={addImages}
          />
        ),
      },
    ]);
    images.push(addImages);
  };
  //1. Have to create new object newProduct
  //2. Have to save all data in the object
  //3. Have to POST on server

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
              value={title}
              onChange={setTitle}
            />
          </div>
          <div className="input-container">
            <Input
              label="Description"
              className="input-description input-width"
              value={description}
              onChange={setDescription}
            />
          </div>
          <div className="input-container">
            <Input
              label="Brand"
              className="input-brand input-width"
              value={brand}
              onChange={setBrand}
            />
          </div>
          <div className="input-container">
            <Select
              label="Category"
              className="input-category input-width"
              value={category}
              onChange={setCategory}
              options={options}
            />
          </div>
          <div className="input-container">
            <Input
              label="Thumnail"
              className="input-thumnail input-width"
              multiline={true}
              value={thumbnail}
              onChange={setThumbnail}
            />
          </div>
          <div className="input-container">
            <div className="container-image">
              <Button
                className="button-add-image"
                title="ADD"
                onClick={addInputField}
              />
              {listInput.map((data) => {
                return <div key={data}>{data.newdata}</div>;
              })}
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
              label="Stock"
              className="input-stock input-width"
              value={stock}
              onChange={setStock}
            />
          </div>
        </div>
        <div className="product-create-price">
          <div className="price-title">Price</div>
          <div className="price-container">$ {price}</div>
        </div>
      </div>
      <div className="button-add-contain">
        <Button
          className="button-add"
          title={"ADD Product"}
          onClick={handleAddProduct}
        />
      </div>
    </div>
  );
};

export default ProductCreation;
