import React, { useContext, useEffect, useState } from "react";
import "../styles/Filter.scss";
import Input from "../Component/Input";
import Select from "../Component/Select";
import { api } from "../Utils/Api";
import { ProductsContext } from "./ProductsProvider";
import { Link } from "react-router-dom";

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
        🏠
      </Link>
      <div>
        <Input label={"Search"} query={query} onChange={setQuery} />
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
