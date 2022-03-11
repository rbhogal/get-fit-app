import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const selectItems = ['Fat Loss', 'Muscle Gain', 'Maintain'];

export default function SelectGoal({ value, error, onChange }) {
  return (
    <div>
      <FormControl
        error={error}
        variant="outlined"
        sx={{ m: 1, minWidth: 120 }}
      >
        <InputLabel>Goal</InputLabel>
        <Select
          defaultValue={undefined}
          size="small"
          value={value}
          onChange={onChange}
          label={'Goal'}
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
