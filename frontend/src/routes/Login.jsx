import { React, useState } from 'react';
import '../App.css';
import TextField from '@mui/material/TextField';
import Header from '../components/Header.tsx';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { FormControlLabel } from '@mui/material';

function Login() {
  const [isRegister, setIsRegister] = useState(false);

  const handleSwitchChange = (event) => {
    setIsRegister(event.target.checked);
  }


  return (
    <div className="App">
      <Header />
      <Box width="80%" margin="auto">
        <Box margin="30px" display="flex" justifyContent="flex-end">
          <FormControlLabel control={<Switch checked={isRegister} onChange={handleSwitchChange} />} label="Register" />
        </Box>
        <Box marginTop="30px">
          <TextField fullWidth id="fullWidth" label="Mail" valiant="outlined" autoComplete="on" />
        </Box>
        <Box marginTop="30px">
          <TextField fullWidth id="outlined-basic" label="Password" valiant="outlined" autoComplete="on" />
        </Box>
        <Box margin="30px">
          <Button variant="contained">{isRegister ? "Register" : "Login" }</Button>
        </Box>
      </Box>
    </div>
  );
}

export default Login;