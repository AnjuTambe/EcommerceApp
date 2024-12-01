import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>
                            Sauranjali
                        </Typography>
                        <Button component={NavLink} to="/" style={({ isActive }) => { return { backgroundColor: isActive ? '#6D1b7b' : '' } }}
                            sx={{ color: "white", taxtTransform: 'none' }}>Home</Button>
                        <Button component={NavLink} to="/contact" style={({ isActive }) => { return { backgroundColor: isActive ? '#6D1b7b' : '' } }}
                            sx={{ color: "white", taxtTransform: 'none' }}>Contact</Button>
                        <Button component={NavLink} to="/LoginReg" style={({ isActive }) => { return { backgroundColor: isActive ? '#6D1b7b' : '' } }}
                            sx={{ color: "white", taxtTransform: 'none' }}>Login/Registration</Button>
                             <Button component={NavLink} to="/Search" style={({ isActive }) => { return { backgroundColor: isActive ? '#6D1b7b' : '' } }}
                            sx={{ color: "white", taxtTransform: 'none' }}>Search</Button>
                            <Button component ={NavLink} to ="/cart" color='inherit'> Cart</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar;
