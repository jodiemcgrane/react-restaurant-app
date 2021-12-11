import { Link } from "react-router-dom";

//Styles
import * as styles from '../styles/home.module.css'

//MUI
import {
    Grid,
    Box,
    Card,
    CardContent,
    Typography,
    Button,
    Divider,
    Avatar,
    Stack
} from '@mui/material';

//MUI Icons
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