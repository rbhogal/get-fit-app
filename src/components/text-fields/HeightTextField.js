import { InputAdornment } from '@mui/material';
import React, { useState } from 'react';
import { TextField } from '@mui/material';

const HeightTextField = ({ name, handleChange, value }) => {
  const [error, setError] = useState(false);

  /* 
    Calculate Height
    1. Covert feet and inches to cm
    2. Add them both
    3. setUserData(height: convertedHeightCm)
  
  */

  return (
    <div>
      <TextField
        label="Feet"
        type="number"
        size="small"
        name="feet"
        sx={{ m: 1, width: 90 }}
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
        variant="outlined"
        required
        onInput={e => {
          e.target.value = Math.max(0, parseInt(e.target.value))
            .toString()
            .slice(0, 1);
        }}
        onChange={handleChange}
      />
      <TextField
        label="Inches"
        type="number"
        name="inches"
        sx={{ m: 1, width: 90 }}
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
        variant="outlined"
        size="small"
        onInput={e => {
          e.target.value =
            (e.target.value > 12) | (e.target.value < 1) ? 0 : e.target.value;
        }}
        onChange={handleChange}
      />
    </div>
  );
};

export default HeightTextField;
