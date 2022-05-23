import React from "react";
import TextField from "@mui/material/TextField";

export default function Input({ label, value, onChange }) {
  const handleEvent = (event) => {
    onChange(event.target.value);
  };
  return (
    <TextField
      label={label}
      variant="outlined"
      value={value}
      onChange={handleEvent}
      inputProps={{
        autoComplete: "off",
      }}
    />
  );
}
