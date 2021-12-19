import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"

//MUI Themes
import { styled, useTheme } from '@mui/material/styles';

//MUI
import { 
    AppBar, 
    Box, 
    Toolbar,
    Typography, 
    IconButton, 
    Menu, 
    MenuItem,
    Drawer,
    Divider,
    List,
    ListItemButton,
    ListItemText,
    ListItemIcon
} from '@mui/material';

//MUI Icons
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const Navbar = (props) => {

    let navigate = useNavigate();

    const logout = () => {
        props.onAuthenticated(false)
        navigate('/', { replace: true })
    }

    const [anchorEl, setAnchorEl] = useState(null);

    //Handle AccountIcon
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
        //Soft bracket for multiple lines of JSX, error if not
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
                    <Link
                        to="/home"
                        style={{
                            color: 'inherit',
                            textDecoration: 'inherit'
                        }}
                        onClick={handleDrawerClose}
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </Link>
                    <Link
                        to="/restaurants"
                        style={{
                            color: 'inherit',
                            textDecoration: 'inherit'
                        }}
                        onClick={handleDrawerClose}
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <RestaurantIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary="Restaurants" />
                        </ListItemButton>
                    </Link>
                </List>
                <List
                    sx={{ mt: "auto", mb: 2 }}
                    onClick={handleDrawerClose}
                >
                    <Link to="/user" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountCircle color="primary" />
                            </ListItemIcon>
                            <ListItemText primary="My Profile" />
                        </ListItemButton>
                    </Link>
                </List>
            </Drawer>

        </Box>
    );
}

export default Navbar;