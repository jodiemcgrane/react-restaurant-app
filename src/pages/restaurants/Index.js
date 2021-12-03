import axios from "axios";
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

//Table MUI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';

import Fade from '@mui/material/Fade';
import Tooltip from '@mui/material/Tooltip';

import Paper from '@mui/material/Paper';


const Index = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/restaurants')
            .then(response => {
                console.log(response.data.restaurants)
                setRestaurants(response.data.restaurants)
            })
            .catch(err => {
                console.log(`Error: ${err}`)
            })
    }, [])

    if (!restaurants) return null

    return (

        <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 950 }} align="center">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Borough</TableCell>
                        <TableCell>Cuisine</TableCell>
                        <TableCell>Grade</TableCell>
                    </TableRow>
                </TableHead>
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
                                    <TableCell>
                                        {
                                            restaurants.grades[1].grade == "A" ? (
                                                <Chip label={restaurants.grades[1].grade} color="success" />
                                            ) : (<Chip label={restaurants.grades[1].grade} color="warning" />)
                                        }
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
        </TableContainer>

    );
}

export default Index;