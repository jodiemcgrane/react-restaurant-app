import { Link } from "react-router-dom";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = (props) => {

    let logoutButton;
    let burgerButton;

    if (props.authenticated) {
        //soft bracket for multiple lines of JSX, error if not
        logoutButton = (
            <Button
                color="inherit"
                onClick={() => props.onAuthenticated(false)}
            >Logout
            </Button>
        )
        burgerButton = (
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon
                    onClick={() => props.onAuthenticated(false)}
                />
            </IconButton>
        )
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                    {burgerButton}

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        <Link
                            to="/"
                            style={{ color: 'inherit', textDecoration: 'inherit' }}
                        >
                            RestaurantReviews
                        </Link>
                    </Typography>

                    {logoutButton}

                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;