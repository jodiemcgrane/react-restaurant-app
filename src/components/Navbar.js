import { Link, useNavigate } from "react-router-dom";

import { styled, useTheme } from '@mui/material/styles';

import { useState } from "react"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';

//Sidebar
import Drawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const Navbar = (props) => {

    let navigate = useNavigate();

    const logout = () => {
        props.onAuthenticated(false)
        navigate('/', { replace: true })
    }

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    ////////////////////Code for Sidebar/Drawer////////////////////////////////

    const drawerWidth = 240;

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        //For content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));

    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    ///////////////End of Sidebar/Drawer code///////////////////

    let accountIcon;
    let burgerButton;

    if (props.authenticated) {
        //soft bracket for multiple lines of JSX, error if not
        accountIcon = (
            <>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>

                <Menu
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={() => { handleClose(); logout(); }}>Sign Out</MenuItem>
                </Menu>
            </>
        )
        burgerButton = (
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleDrawerOpen}
            >
                <MenuIcon />
            </IconButton>
        )
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" open={open}>
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

                    {accountIcon}

                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <Link to="/home" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </Link>
                    <Link to="/restaurants" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <RestaurantIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary="Restaurants" />
                        </ListItemButton>
                    </Link>
                </List>
            </Drawer>

        </Box>
    );
}

export default Navbar;