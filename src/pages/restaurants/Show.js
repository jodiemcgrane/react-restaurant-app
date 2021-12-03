import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import axios from 'axios'

//MUI
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';

import IconButton from '@mui/material/IconButton';
import RestaurantIcon from '@mui/icons-material/Restaurant';

import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const Show = () => {

    let { id } = useParams()
    const [restaurant, setRestaurant] = useState(null)

    let token = localStorage.getItem('token')

    useEffect(() => {
        axios.get(`http://localhost:8000/restaurants/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response.data.restaurant)
                setRestaurant(response.data.restaurant)
            })
            .catch(err => {
                console.log(`Error: ${err}`)
            })
    }, [id, token])

    if (!restaurant) return null


    return (
        <Box
            display="flex"
            justifyContent="center"
        >
            <Grid
                item md={8}
            >
                <Card
                    sx={{ boxShadow: 3, p: 2 }}
                >
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: '#1976D2' }}>
                                <RestaurantIcon color='inherit' />
                            </Avatar>
                        }
                        title={restaurant.name}
                        subheader={restaurant.borough}
                        action={
                            restaurant.grades[1].grade == "A" ? (
                                <Chip label={restaurant.grades[1].grade} color="success" sx={{ p: 1, mt: 1, mr: 1 }} />
                            ) : (<Chip label={restaurant.grades[1].grade} color="warning" sx={{ p: 1, mt: 1, mr: 1 }} />)
                        }
                    >
                    </CardHeader>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center'

                    }}>
                        <CardContent>

                            <Stack direction="row" spacing={12}>

                                <Typography variant="h5">
                                    Building No.
                                    <Typography variant="body2" color="text.secondary">
                                        {restaurant.address.building}
                                    </Typography>
                                </Typography>

                                <Typography variant="h5">
                                    Street
                                    <Typography variant="body2" color="text.secondary">
                                        {restaurant.address.street}
                                    </Typography>
                                </Typography>

                                <Typography variant="h5">
                                    Zipcode
                                    <Typography variant="body2" color="text.secondary">
                                        {restaurant.address.zipcode}
                                    </Typography>
                                </Typography>

                            </Stack>

                        </CardContent>
                    </Box>

                </Card>
            </Grid>
        </Box>

    );
}

export default Show;