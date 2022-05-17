import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={items}
      sx={{ width: 300}}
      renderInput={(params) => <TextField {...params} label="Search" />}
    />
  );
}
const items = [
    { label: 'Phone1', year: 2022 },
    { label: 'Phone2', year: 2022 },
    { label: 'Phone3', year: 2022 },
]