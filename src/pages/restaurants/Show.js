import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import axios from 'axios'

//MUI
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

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
        <div>
            <h2>Restaurants Show page</h2>
            <p>{restaurant.name}</p>
        </div>
     );
}
 
export default Show;