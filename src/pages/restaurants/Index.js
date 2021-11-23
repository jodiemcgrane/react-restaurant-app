import axios from "axios";
import { useEffect, useState } from 'react'

const Index = () => {

    useEffect(() => {
        axios.get('http://localhost:8000/restaurants')
        .then(response => {
            console.log(response.data.restaurants)
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        })
    })

    return (
        <div>
            <h2>Restaurants</h2>
            <p>This is the Restaurants Index page</p>
        </div>
    );
}

export default Index;