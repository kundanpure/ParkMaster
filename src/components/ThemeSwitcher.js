import React from 'react';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const ThemeSwitcher = () => {
    return (
        <IconButton id="theme_change_button" color="inherit">
            <span>Light</span> {/* This text will be toggled by the JavaScript */}
            <Brightness4 /> {/* This icon can be changed based on theme */}
        </IconButton>
    );
};

export default ThemeSwitcher;
