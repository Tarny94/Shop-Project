import React from "react";
import TextField from "@mui/material/TextField";

export default function Input({
  label,
  value,
  onChange,
  type,
  className,
  rows,
  multiline,
  endAdornment = null,
}) {
  const handleEvent = (event) => {
    onChange(event.target.value);
  };
  return (
    <TextField
      label={label}
      id="outlined-multiline-static"
      multiline={multiline}
      rows={rows}
      type={type}
      variant="outlined"
      value={value}
      className={className}
      onChange={handleEvent}
      inputProps={{
        autoComplete: "off",
      }}
      InputProps={{
        endAdornment: endAdornment ? endAdornment : null,
      }}
    />
  );
}
