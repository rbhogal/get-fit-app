import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectDropdown({ selectData, handleChange, value }) {
  const { selectItems } = selectData;

  return (
    <div>
      <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>{selectData.label}</InputLabel>
        <Select
          size="small"
          value={value}
          onChange={handleChange}
          name={selectData.label}
          label={selectData.label}
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
