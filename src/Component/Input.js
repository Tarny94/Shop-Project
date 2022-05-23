import React from "react";
import TextField from "@mui/material/TextField";

export default function Input({ value, onChange }) {
  const handleEvent = (event) => {
    onChange(event.target.value);
  };
  return (
    <TextField
      id="outlined-basic"
      label="Search"
      variant="outlined"
      value={value}
      onChange={handleEvent}
      inputProps={{
        autoComplete: "off",
      }}
    />
  );
}
