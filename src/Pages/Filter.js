import React, { useContext, useEffect, useState } from "react";
import "../styles/Filter.scss";
import Input from "../Component/Input";
import Select from "../Component/Select";
import { api } from "../Utils/Api";
import { ProductsContext } from "./ProductsProvider";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const Filter = () => {
  const { query, category, setCategory, setQuery } =
    useContext(ProductsContext);
  const [options, setOptions] = useState();

  useEffect(() => {
    api.categories.fetch().then((data) => {
      setOptions(data.data);
    });
  }, []);

  return (
    <div className="filter-container">
      <Link to={"/"} className="home-button">
        SHOURE
      </Link>
      <div>
        <Input
          label={"Search"}
          query={query}
          value={query}
          endAdornment={
            <div onClick={() => setQuery("")}>
              <CloseIcon className="image-remove-icon" />
            </div>
          }
          onChange={setQuery}
        />
      </div>
      <div className="select-category">
        <Select
          value={category}
          options={options}
          onChange={setCategory}
          label="Categories"
        />
      </div>
    </div>
  );
};

export default Filter;
