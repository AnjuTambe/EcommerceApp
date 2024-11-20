import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          E-Commerce
        </Typography>
        <Button color="inherit" onClick={() => navigate('/womens-clothes')}>Women's Clothes</Button>
        <Button color="inherit" onClick={() => navigate('/mens-clothes')}>Men's Clothes</Button>
        <Button color="inherit" onClick={() => navigate('/kids-clothes')}>Kids' Clothes</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
