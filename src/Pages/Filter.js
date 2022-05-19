import React, { useEffect, useState } from "react";
import "../styles/Filter.scss";
import Input from "../Component/Input";
import Select from "../Component/Select";
import { api } from "../Utils/Api";

const Filter = () => {
  const [options, setOptions] = useState();
  const [category, setCategory] = useState("");

  useEffect(() => {
    api.categories.fetch().then((data) => {
      setOptions(data.data);
    });
  }, []);

  return (
    <div className="filtreContainers">
      <div>
        <Input />
      </div>
      <div className="select">
        <Select
          value={category}
          options={options}
          onChange={(val) => setCategory(val)}
        />
      </div>
    </div>
  );
};

export default Filter;
