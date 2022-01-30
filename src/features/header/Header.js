import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import {getAuthStatus} from './authSlice'

function renderContent(authState) {   
  switch (authState.auth) {
    case null:
      return (
        <div>
            Loading ...
        </div>
      );
    case false:        
      return (
        <div>
          <Button variant="contained" color="secondary" style={{ marginRight: "10px" }}> Login </Button>
          <Button variant="contained" color="secondary"> Sign Up </Button>
        </div>
      );
    default: 
      return(
        <div>
        <Button variant="contained" color="secondary"> Logout </Button>
        <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={(e) => { this.handleMenu(e);}} color="inherit">
          <AccountCircle />
        </IconButton>
      </div>
      )         
  }
}

function Header() {
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(getAuthStatus());
  },[])
  const authState =  useSelector((state) => state.auth)
 
  const[anchorEl, setAnchorEl] = useState(null);
  const[auth, setAuth] = useState(null);

  const handleClose = () =>{
    setAnchorEl({anchorEl: null})
  }

  const handleMenu = (event) => {
    setAnchorEl({anchorEl : event.currentTarget})
  }



  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Wizdom QA Trainings</Typography>
                    <div>
                        {renderContent(authState)}
                        <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{vertical: "top", horizontal: "right",}} keepMounted transformOrigin={{vertical: "top",horizontal: "right",}} open={Boolean(anchorEl)} onClose={() => handleClose()}>
                        <MenuItem onClick={() => handleClose()}>Profile</MenuItem>
                        <MenuItem onClick={() => handleClose()}>My account</MenuItem> 
                    </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    </div>
  );
}

export default Header;
