import React from 'react';
import '../App.css';
import Header from '../components/Header.tsx';
import Overview from './Plan/Overview.jsx';
import { SpeedDial } from '@mui/material';
import { SpeedDialAction } from '@mui/material';
import { SpeedDialIcon } from '@mui/material';
import { Room, RestaurantMenu, Flight } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { FormControlLabel } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

const viewList = [
  { name: 'Overview', id: 'overview'},
  { name: 'SpotList', id: 'spotList'},
  { name: 'Itinerary', id: 'itinerary'},
  { name: 'Payment', id: 'payment'},
];

function Plan() {
  const [selectedView, setSelectedView] = React.useState('Overview');

  const handleSetSelectedView = (value) => {
    setSelectedView(value);
  }

  const actions = [
    { icon: <Flight />, name: 'Transfer' },
    { icon: <RestaurantMenu />, name: 'Restaurant' },
    { icon: <Room />, name: 'Spot' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Header />{ }
      <Box width="80%" margin="auto" marginTop="30px">
        <ButtonGroup variant="contained" aira-label="View" sx={{ width: "100%" }}>
          {viewList.map((view) => (
            <Button
              id={view.id}
              sx={{ textTransform: 'none', flex: 1, backgroundColor: selectedView === view.name ? 'primary.light' : 'primary' }}
              value={view.name}
              onClick={() => handleSetSelectedView(view.name)}
            >{view.name}</Button>
          ))}
        </ButtonGroup>
        {selectedView === 'Overview' ? <Overview /> : ""}
        {selectedView === 'SpotList' ? "SpotList" : ""}
        {selectedView === 'Itinerary' ? "Itinerary" : ""}
        {selectedView === 'Payment' ? "Payment" : ""}
      </Box>

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

export default Plan;