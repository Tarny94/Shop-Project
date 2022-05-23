import React from "react";

import { Rating as MUIRating } from "@mui/material";

export default function Rating({ readOnly, value, className }) {
  return (
    <>
      <MUIRating
        name="read-only"
        value={value}
        readOnly={readOnly}
        className={className}
      />
    </>
  );
}
