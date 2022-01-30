import { InputAdornment } from '@mui/material';
import React, { useState } from 'react';
import { TextField } from '@mui/material';

const HeightTextField = ({ name, handleChange, value }) => {
  const [error, setError] = useState(false);

  return (
    <div>
      <TextField
        label="Feet"
        type="number"
        name="feet"
        sx={{ m: 1, width: 70 }}
        InputProps={{
          endAdornment: <InputAdornment position="end">ft</InputAdornment>,
          inputMode: 'numeric',
          min: 1,
          max: 9,
          pattern: '[1-9]*',
        }}
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
        required
        onInput={e => {
          e.target.value = Math.max(0, parseInt(e.target.value))
            .toString()
            .slice(0, 1);
        }}
      />
      <TextField
        label="Inches"
        type="number"
        name="inches"
        sx={{ m: 1, width: 70 }}
        required
        InputProps={{
          endAdornment: <InputAdornment position="end">in</InputAdornment>,
          min: 1,
          max: 12,
          inputMode: 'numeric',
          pattern: '[1-12]*',
        }}
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
        onInput={e => {
          e.target.value = e.target.value > 12 ? 1 : e.target.value;
        }}
        error={false}
        helperText={false ? 'too high' : ''}
      />
    </div>
  );
};

export default HeightTextField;
