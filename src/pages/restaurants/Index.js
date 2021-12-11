import axios from '../../config';

import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

//MUI
import { Box, Paper, Typography, Stack, Avatar } from "@mui/material";
import RestaurantIcon from '@mui/icons-material/Restaurant';

//Table MUI
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Tooltip, Fade } from '@mui/material';

//React Spinner
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const Index = () => {

    const override = css`
    position: fixed;/
    top: 50%;
    left: 45%;
    bottom: 25%;
`;

    //Restaurants

    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`/restaurants`)
            .then(response => {
                console.log(response.data.restaurants)
                setRestaurants(response.data.restaurants)
                setLoading(false);
            })
            .catch(err => {
                console.log(`Error: ${err}`)
            })
    }, [])

    if (!restaurants) return null

    return (

        <Box>
            <Box>
                <Stack
                    sx={{ p: 1, mb: 2 }}
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-start"
                    spacing={2}
                >
                    <Typography variant="h3">Restaurants</Typography>
                    <Avatar sx={{ bgcolor: '#1976D2' }}>
                        <RestaurantIcon color='inherit' />
                    </Avatar>
                </Stack>
            </Box>

            <TableContainer component={Paper} sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Table sx={{ maxWidth: 950 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Borough</TableCell>
                            <TableCell>Cuisine</TableCell>
                            <TableCell>Grade</TableCell>
                        </TableRow>
                    </TableHead>

                    {loading ? (<ClipLoader
                        css={override}
                        size={200}
                        color={"#1976D2"}
                    />) : (
                        <TableBody>
                            {restaurants
                                .map((restaurants) => {
                                    return (
                                        <TableRow>
                                            <Tooltip
                                                TransitionComponent={Fade}
                                                title="View" placement="left"
                                                arrow
                                            >
                                                <TableCell component={Link} to={`/restaurants/${restaurants._id}`}>
                                                    {restaurants.name}
                                                </TableCell>
                                            </Tooltip>
                                            <TableCell>
                                                {restaurants.borough}
                                            </TableCell>
                                            <TableCell>
                                                {restaurants.cuisine}
                                            </TableCell>

                                            <Tooltip
                                                TransitionComponent={Fade}
                                                title={`Score: ${restaurants.grades[1].score}`} placement="right"
                                                arrow
                                            >

                                                <TableCell>
                                                    {
                                                        restaurants.grades[1].grade === "A" ? (
                                                            <Chip
                                                                label={restaurants.grades[1].grade}
                                                                color="success"
                                                            />
                                                        ) : (<Chip
                                                            label={restaurants.grades[1].grade}
                                                            color="warning"
                                                        />)
                                                    }
                                                </TableCell>

                                            </Tooltip>

                                        </TableRow>
                                    );
                                })}

                        </TableBody>
                    )
                    }
                </Table>
            </TableContainer>

        </Box>

    );
}

export default Index;