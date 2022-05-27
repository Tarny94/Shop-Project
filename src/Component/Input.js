import React from "react";
import TextField from "@mui/material/TextField";
import { type } from "@testing-library/user-event/dist/type";

export default function Input({ label, value, onChange, type }) {
  const handleEvent = (event) => {
    onChange(event.target.value);
  };
  return (
    <TextField
      label={label}
      type={type}
      variant="outlined"
      value={value}
      onChange={handleEvent}
      inputProps={{
        autoComplete: "off",
      }}
    />
  );
}
