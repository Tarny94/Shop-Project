import * as React from "react";
import { Button as MUIButton } from "@mui/material";
import "../styles/Authentification.scss";

export default function Button({ title, disabled, onClick, className }) {
  return (
    <MUIButton
      onClick={onClick}
      className={className}
      variant="contained"
      disbled={disabled}
    >
      {title}
    </MUIButton>
  );
}
