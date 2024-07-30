import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    IntelliPark
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/login">Login</Button>
                <Button color="inherit" component={Link} to="/signup">Signup</Button>
                <Button color="inherit" component={Link} to="/search">Search</Button>
                <Button color="inherit" component={Link} to="/generate-qr">Generate QR</Button>
                {/* <ThemeSwitcher /> */}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
