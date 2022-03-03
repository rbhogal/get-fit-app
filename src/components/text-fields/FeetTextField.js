import { InputAdornment } from '@mui/material';
import React from 'react';
import { TextField } from '@mui/material';

const FeetTextField = ({ value, error, onChange }) => {
  return (
    <div>
      <TextField
        error={error}
        value={value}
        onChange={onChange}
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
      />
    </div>
  );
};

export default FeetTextField;
