import { InputAdornment } from '@mui/material';
import React from 'react';
import { TextField } from '@mui/material';

const InchesTextField = ({ value, error, onChange }) => {
  // inches

  return (
    <div>
      <TextField
        error={error}
        value={value}
        onChange={onChange}
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
      />
    </div>
  );
};

export default InchesTextField;
