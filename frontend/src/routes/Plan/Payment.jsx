import { React, useState } from 'react';
import { SpeedDial, TextField, Typography } from '@mui/material';
import { SpeedDialAction } from '@mui/material';
import { SpeedDialIcon } from '@mui/material';
import { Room, RestaurantMenu, Flight } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { FormControlLabel } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

function Payment() {
  return (
    <ThemeProvider theme={theme}>
      <Box marginTop="30px" padding="10px" sx={{ border: 2, borderColor: "primary.main", borderRadius: 2}}></Box>
      <Box marginTop="30px" padding="10px" sx={{ border: 2, borderColor: "primary.main", borderRadius: 2}}></Box>
    </ThemeProvider>
  );
}

export default Payment;