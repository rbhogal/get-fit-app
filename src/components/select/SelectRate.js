import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const selectItems = [
  'Slow — 0.5% per lb of bodyweight',
  'Moderate — 0.7% per lb of bodyweight',
  'Fast — 1% per lb of bodyweight',
  'Maintain — Maintain current weight (TDEE)',
];

export default function SelectRate({ error, value, onChange, enteredGoal }) {
  return (
    <div>
      <FormControl
        error={error}
        variant="outlined"
        sx={{ m: 1, minWidth: 120 }}
      >
        <InputLabel>Rate</InputLabel>
        <Select
          defaultValue={undefined}
          size="small"
          value={value}
          onChange={onChange}
          label={'Rate'}
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
