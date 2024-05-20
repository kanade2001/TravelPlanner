import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";

const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{ textDecoration: 'None', color: "inherit", }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Travel Planner</Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Link to="/login" style={{ textDecoration: 'None', color: "inherit" }}>
            <Typography variant="h6" component="div">Login</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;