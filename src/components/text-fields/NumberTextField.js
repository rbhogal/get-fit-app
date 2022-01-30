import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function NumberTextField({ handleChange, name }) {
  const [error, setError] = useState(false);

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
        size="small"
        margin="dense"
        id="standard-number"
        label={name}
        type="number"
        inputProps={{
          min: 1,
          max: name === 'Age' ? 99 : 999,
        }}
        name={name}
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
        onChange={handleChange}
        required
        onInput={e => {
          if (name === 'Weight') {
            e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, 3);
          }
          if (name === 'Age') {
            e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, 2);
          }
        }}
      />
    </Box>
  );
}
