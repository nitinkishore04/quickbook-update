import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"

function Navbar() {

  const navigate = useNavigate();

  return (

    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, margin: "2% 4%"  }}>
          Business Profile
        </Typography>
        <Button color="inherit" onClick={() => navigate("/") }  style={{ marginRight: "5%" }}>
          Home
        </Button>
      </Toolbar>
    </AppBar>

  );

}

export default Navbar;