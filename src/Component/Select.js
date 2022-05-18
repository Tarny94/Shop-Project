import * as React  from 'react';
import { useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {   Select as MUISelect} from '@mui/material';


export default function Select({value, options = [], onChange}) {
  const theme = useTheme();

  const handleChange = (event) => onChange(event.target.value);

  const getLabel = (option ) => {
      // option.split('-')
      console.log(option);
     if(option.includes('-')) {
       return option.split('-').join(' ');
         
     } return option;
  }

  return (
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
        <MUISelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Categories"
          onChange={handleChange}
        >
          {options.map(option => 
              <MenuItem 
                value={option}
                key={option}
              >
                { getLabel(option) }
                </MenuItem>  
            )
          }
        
        </MUISelect>
      </FormControl>
  );
}
