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

const actions = [
  { icon: <Flight />, name: 'Transfer' },
  { icon: <RestaurantMenu />, name: 'Restaurant' },
  { icon: <Room />, name: 'Spot' },
];

function Itinerary() {
  // Edit Itinerary (True->Able to edit, False->Unable to edit)
  const [isEditItinerary, setIsEditItinerary] = useState(false);
  const handleSetIsEditItinerary = (event) => {
    setIsEditItinerary(event.target.checked)
  }
  const handleSaveItinerary = () => {
    handleSaveItinerarySuccess();
  }

  // Save Itinerary
  const [isItinerarySaved, setIsItinerarySaved] = useState(false);
  const handleSaveItinerarySuccess = () => {
    setIsItinerarySaved(true);

    setTimeout(() => {// Freeze the button for 1 second
      setIsItinerarySaved(false);
      setIsEditItinerary(false);
    }, 1000);
  }

  return (
    <ThemeProvider theme={theme}>
      <Box marginTop="30px" padding="10px" sx={{ backgroundColor: "primary.light", borderRadius: 2, flexGrow: 1, display: "flex", justifyContent: "space-between"}}>
        <Stack direction={"row"} spacing={2}>
          <Button
            id="ExportItinerary"
            variant="contained"
            color="primary"
            sx={{ textTransform: "none", width: "120px" }}
          >
            Export
          </Button>
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <FormControlLabel control={<Switch checked={isEditItinerary} onChange={handleSetIsEditItinerary}/>} label="Edit" />
          <Button
            id="SaveItinerary"
            variant="contained"
            color={ isItinerarySaved ? "success" : "primary" }
            sx={{ textTransform: "none", width: "120px" }}
            disabled={ !isEditItinerary }
            onClick={ handleSaveItinerary }
            width = "30px"
          >
            { isItinerarySaved ? "Saved!" : " Save "}
          </Button>
        </Stack>
      </Box>
      <Box marginTop="30px" padding="10px" sx={{ border: 2, borderColor: "primary.main", borderRadius: 2}}></Box>

      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </ThemeProvider>
  );
}

export default Itinerary;