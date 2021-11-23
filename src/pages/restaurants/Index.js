import axios from "axios";
import { useEffect, useState } from 'react'

const Index = () => {
    const [restaurants, setRestaurants] = useState(null)

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

    const restaurantsList = restaurants.map(restaurant => {
        return (
            <div>
                <p><b>Name: </b> {restaurant.name} </p>
                <p><b>Cuisine: </b> {restaurant.cuisine} </p>
                <hr />
            </div>
        )
    })

    return (
        <div>
            <h2>Restaurants</h2>
            <p>This is the Restaurants Index page</p>
            {restaurantsList}
        </div>
    );
}

export default Index;