import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import TextField from '@mui/material/TextField';
import Header from '../components/Header.tsx';
import Box from '@mui/material/Box';

function Login() {
  const JumpLink = (path) => {
    useNavigate(path);
  }

  return (
    <div className="App">
      <Header />
      <Box margin="30px">
        <TextField id="outlined-basic" label="Mail" valiant="outlined" autoComplete="on" />
        <TextField id="outlined-basic" label="Password" valiant="outlined" autoComplete="on" />
        
      </Box>
    </div>
  );
}

export default Login;