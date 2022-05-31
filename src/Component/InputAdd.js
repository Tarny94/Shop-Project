import Icon from "@mui/material/Icon";

import { TextField } from "@mui/material";

export const InputAdd = ({ label, className, multiline }) => {
  return (
    <TextField
      label={label}
      className={className}
      multiline={multiline}
      maxRows={4}
      InputProps={{
        endAdornment: <Icon color="primary">+</Icon>,
      }}
    />
  );
};
