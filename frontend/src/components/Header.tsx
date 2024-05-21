import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleNavigation = () => { // Operation when title is clicked
    navigate('/');
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path: string) => { // Operation when menu item is clicked
    navigate(path);
    handleClose();
  }



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* Title */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: 'pointer', textAlign: 'left'}}
            onClick={handleNavigation}
            style={{ textDecoration:'none', color: "inherit"}}
          >
            Travel Planner
          </Typography>
          <Box sx={{ flexGrow: 1 }} /> {/* padding */}
          <Link to="/login" style={{ textDecoration: 'None', color: "inherit" }}>
            <Typography variant="h6" component="div">Login</Typography>
          </Link>

          {/* MenuIcon */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 2 }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={() => handleMenuItemClick('/')}>Home</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('/Plan')}>My Plan</MenuItem>
            <MenuItem onClick={handleClose}>CheckList</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;