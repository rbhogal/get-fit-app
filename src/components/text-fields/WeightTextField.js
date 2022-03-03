import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function WeightTextField({ value, error, onChange }) {
  /* 
    Covert weight (lbs) to kg
  */

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: 120 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        value={value}
        error={error}
        onChange={onChange}
        size="small"
        margin="dense"
        id="standard-number"
        label={'Weight (lbs)'}
        type="number"
        inputProps={{
          min: 1,
          max: 999,
        }}
        name={'Weight'}
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        required
        onInput={e => {
          e.target.value = Math.max(0, parseInt(e.target.value))
            .toString()
            .slice(0, 3);
        }}
      />
    </Box>
  );
}
