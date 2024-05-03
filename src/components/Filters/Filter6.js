import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FullWidthTextField() {
  return (
    <Box
      sx={{
        width: 300,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Search Company Name" id="fullWidth" />
    </Box>
  );
}