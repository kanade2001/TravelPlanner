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




function Overview() {
  // Title Edit
  const [isEditTitle, setIsEditTitle] = useState(false);
  const handleSetIsEditTitle = (event) => {
    setIsEditTitle(event.target.checked)
  };
  const [titleValue, setTitleValue] = useState("MyTravel");
  const handleChangeTitleValue = (event) => {
    setTitleValue(event.target.value);
  };
  const [savedTitleValue, setSavedTitleValue] = useState("MyTravel");
  const handleSetSavedTitleValue = () => {
    setSavedTitleValue(titleValue);
    setIsEditTitle(false);
  };

  // Schedule Edit
  const [isEditSchedule, setIsEditSchedule] = useState(false);
  const handleSetIsEditSchedule = (event) => {
    setIsEditSchedule(event.target.checked)
  };

  return (
    <ThemeProvider theme={theme}>
      {/* Title */}
      <Box marginTop="30px" padding="10px" sx={{ border: 2, borderColor: "primary.main", borderRadius: 2}}>
        <Stack direction={"row"} spacing={2}>
          <Typography variant="h5" color="primary.main" sx={{ textAlign: "left", flex: 1 }}>
            Titlle
          </Typography>
          <FormControlLabel control={<Switch checked={isEditTitle} onChange={handleSetIsEditTitle} />} label="Edit" />
        </Stack>
        <Stack direction={"row"}>
          <TextField
            id="travelTitle"
            label=""
            value={titleValue}
            fullWidth
            InputProps={{
              readOnly: isEditTitle ? false : true,
            }}
            onChange={handleChangeTitleValue}
          />

          {isEditTitle ? <Button variant="contained" onClick={handleSetSavedTitleValue}>Save</Button> : ""}
        </Stack>
        { titleValue }<br></br>
        { savedTitleValue}
      </Box>

      {/* Schedule */}
      <Box marginTop="30px" padding="10px" sx={{ border: 2, borderColor: "primary.main", borderRadius: 2}}>
      <Stack direction={"row"} spacing={2}>
          <Typography variant="h5" color="primary.main" sx={{ textAlign: "left", flex: 1 }}>
            Schedule
          </Typography>
          <FormControlLabel control={<Switch checked={isEditSchedule} onChange={handleSetIsEditSchedule} />} label="Edit" />
        </Stack>
      </Box>

      {/* Members */}
      <Box marginTop="30px" padding="10px" sx={{ border: 2, borderColor: "primary.main", borderRadius: 2 }}>
        <Typography variant="h5" color="primary.main" sx={{ textAlign: "left"}}>
          Members
        </Typography>
        <Stack direction="row" spacing={1}>
          <Avatar>K</Avatar>
          <Avatar>K</Avatar>
        </Stack>
      </Box>


      <Box marginTop="30px" padding="10px" sx={{ border: 2, borderColor: "primary.main", borderRadius: 2}}></Box>
      <Box marginTop="30px" padding="10px" sx={{ border: 2, borderColor: "primary.main", borderRadius: 2}}></Box>
    </ThemeProvider>
  );
}

export default Overview;