import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const selectItems = ['Male', 'Female'];

export default function SelectSex({ value, error, onChange }) {
  return (
    <div>
      <FormControl
        error={error}
        variant="outlined"
        sx={{ m: 1, minWidth: 120 }}
      >
        <InputLabel>Sex</InputLabel>
        <Select
          size="small"
          value={value}
          onChange={onChange}
          name={'Sex'}
          label={'Sex'}
          required
        >
          {selectItems.map(selectItem => (
            <MenuItem key={selectItem} value={selectItem}>
              {selectItem}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
