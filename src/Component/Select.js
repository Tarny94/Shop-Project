import React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select as MUISelect } from "@mui/material";
import IconClear from "./Clear";

export default function Select({ value, options = [], onChange, label }) {
  const handleChange = (event) => onChange(event.target.value);

  const getLabel = (option) => {
    return option.includes("-") ? option.split("-").join(" ") : option;
  };

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <MUISelect
        endAdornment={
          <div onClick={() => onChange("")} style={{ marginRight: 20 }}>
            <IconClear />
          </div>
        }
        value={value}
        label={label}
        onChange={handleChange}
      >
        <MenuItem>None</MenuItem>
        {options.map((option) => (
          <MenuItem value={option} key={option}>
            {getLabel(option)}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
}
