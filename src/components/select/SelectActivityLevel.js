import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const selectItems = [
  'Sedentary — Desk job and little to no exercise',
  'Lightly Active — Light exercise/sports 1-3 day/week',
  'Moderately Active — Moderate exercise/sport 3-5 days/week',
  'Very Active — Hard exercise/sports 6-7 days/week',
  'Extremely Active — Hard daily exercise/sports and physical job',
];

export default function SelectActivityLevel({ error, value, onChange }) {
  return (
    <div>
      <FormControl
        error={error}
        variant="outlined"
        sx={{ m: 1, minWidth: 120 }}
      >
        <InputLabel>Activity Level</InputLabel>
        <Select
          defaultValue={undefined}
          size="small"
          value={value}
          onChange={onChange}
          label={'Activity Level'}
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
