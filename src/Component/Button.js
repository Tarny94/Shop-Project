import * as React from "react";
import { Button as MUIButton } from "@mui/material";
import "../styles/Authentification.scss";

export default function Button({ title, disabled, onClick }) {
  return (
    <MUIButton
      onClick={onClick}
      className="mui-button"
      variant="contained"
      disbled={disabled}
    >
      {title}
    </MUIButton>
  );
}
