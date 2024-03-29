import React from "react";
import "../styles/Filter.scss";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select as MUISelect } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function Select({
  value,
  options = [],
  onChange,
  label,
  className,
  onClose,
}) {
  const handleChange = (event) => onChange(event.target.value);

  const getLabel = (option) => {
    return option.includes("-") ? option.split("-").join(" ") : option;
  };

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <MUISelect
        endAdornment={
          value ? (
            <div className="select-clear-icon" onClick={onClose}>
              <CloseIcon />
            </div>
          ) : (
            ""
          )
        }
        value={value}
        label={label}
        onChange={handleChange}
        className={className}
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
