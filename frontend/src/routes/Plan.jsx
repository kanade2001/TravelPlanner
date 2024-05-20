import React from 'react';
import '../App.css';
import Header from '../components/Header.tsx';
import { SpeedDial } from '@mui/material';
import { SpeedDialAction } from '@mui/material';
import { SpeedDialIcon } from '@mui/material';
import { Room, RestaurantMenu, Flight } from '@mui/icons-material';

function Plan() {
  const actions = [
    { icon: <Flight />, name: 'Transfer' },
    { icon: <RestaurantMenu />, name: 'Restaurant' },
    { icon: <Room />, name: 'Spot' },
  ];

  return (
    <div className="App">
      <Header />{ }
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
    </div>
  );
}

export default Plan;