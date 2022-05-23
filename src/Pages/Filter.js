import React, { useEffect, useState } from "react";
import "../styles/Filter.scss";
import Input from "../Component/Input";
import Select from "../Component/Select";
import { api } from "../Utils/Api";

const Filter = ({ query, setQuery, category, setCategory }) => {
  const [options, setOptions] = useState();

  useEffect(() => {
    api.categories.fetch().then((data) => {
      setOptions(data.data);
    });
  }, []);

  // useEffect(() => {
  //   setSearchCategory(Input.target.value);
  // }, [setSearchCategory]);

  return (
    <div className="filter-container">
      <div>
        <Input query={query} onChange={setQuery} />
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
