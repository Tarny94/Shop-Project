import React from "react";

import { Rating as MUIRating } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Rating({ value, className }) {
  return (
    <>
      <MUIRating
        name="read-only"
        value={value}
        readOnly
        className={className}
      />
    </>
  );
}
