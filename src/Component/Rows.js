import React from "react";
import Grid from "@mui/material/Grid";

export default function NestedGrid({ children }) {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {children}
    </Grid>
  );
}
