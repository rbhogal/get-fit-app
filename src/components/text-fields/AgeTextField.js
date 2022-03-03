import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function AgeTextField({ value, error, onChange }) {
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
        error={error}
        value={value}
        size="small"
        margin="dense"
        id="standard-number"
        label={'Age'}
        type="number"
        inputProps={{
          min: 1,
          max: 99,
        }}
        name={'Age'}
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        onChange={onChange}
        required
        onInput={e => {
          e.target.value = Math.max(0, parseInt(e.target.value))
            .toString()
            .slice(0, 2);
        }}
      />
    </Box>
  );
}
