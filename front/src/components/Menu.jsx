import React from 'react';
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from '@mui/material';

const Menu = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/login">Login</Button>
        <Button color="inherit" component={Link} to="/register">Registro</Button>
        <Button color="inherit" component={Link} to="/home">Home</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
