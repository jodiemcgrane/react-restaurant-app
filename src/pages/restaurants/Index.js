import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import axios from "axios";
import { useEffect, useState } from 'react'

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
        <div>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Cuisine</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {restaurants
                            .map((restaurants) => {
                                return (
                                    <TableRow>
                                        <TableCell>
                                            {restaurants._id}
                                        </TableCell>
                                        <TableCell>
                                            {restaurants.name}
                                        </TableCell>
                                        <TableCell>
                                            {restaurants.cuisine}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
}

export default Index;