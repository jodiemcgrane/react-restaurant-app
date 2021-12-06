import { Link } from "react-router-dom";

import * as styles from '../styles/home.module.css'

//MUI
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import RestaurantIcon from '@mui/icons-material/Restaurant';

const Home = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center">
            <Grid item md={10}>
                <Card className={styles.card}>
                    <CardContent>
                        <Grid container>

                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >

                                <Grid item md={6}>

                                    <Typography
                                        variant="h4"
                                        sx={{ letterSpacing: 0.8 }}
                                    >
                                        Restaurants Reviews
                                    </Typography>

                                    <Divider />

                                    <Typography
                                        variant="body1"
                                        sx={{ letterSpacing: 0.5, p: 1, mt: 1 }}
                                    >
                                        Restaurants Reviews is an Irish review website for restaurants.
                                        It is Ireland's most trusted online review of restaurants from critics.
                                        Here you can manage the database of restauarants and the comments made by yourself and other users.
                                    </Typography>

                                    <Typography
                                        align="center"
                                    >
                                        <Button
                                            variant="outlined"
                                            size="large"
                                            sx={{ mt: 2 }}
                                        >
                                            <Link
                                                to="/restaurants"
                                                style={{ color: 'inherit', textDecoration: 'inherit' }}
                                            >
                                                Restaurants
                                            </Link>
                                        </Button>
                                    </Typography>

                                </Grid>

                                <Grid item md={6}>
                                    <Stack
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                        spacing={2}
                                    >

                                        <Avatar sx={{ bgcolor: '#1976D2', height: '200px', width: '200px' }}>
                                            <RestaurantIcon color='inherit' sx={{ height: '150px', width: '150px' }} />
                                        </Avatar>

                                    </Stack>
                                </Grid>

                            </Box>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Box>
    );
}

export default Home;