import React from "react";

import TextField from "@mui/material/TextField";

export const InputNumbers = ({ label, type, className, onChange }) => {
  const handleEvent = (event) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      label={label}
      type={type}
      className={className}
      name="numberformat"
      id="formatted-numberformat-input"
      InputProps={{}}
      variant="standard"
      onChange={handleEvent}
    />
  );
};
