import React from "react";
import { useTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select as MUISelect } from "@mui/material";

export default function Select({ label, value, options = [], onChange }) {
  const theme = useTheme();

  const handleChange = (event) => onChange(event.target.value);

  const getLabel = (option) => {
    return option.includes("-") ? option.split("-").join(" ") : option;
  };

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <MUISelect value={value} label={label} onChange={handleChange}>
        {options.map((option) => (
          <MenuItem value={option} key={option}>
            {getLabel(option)}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
}
