import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

//MUI
import Container from '@mui/material/Container';

//Imported Components
import Navbar from './components/Navbar';

//Imported Pages
import Welcome from './pages/Welcome';
import Home from './pages/Home';

//Restaurants
import RestaurantsIndex from './pages/restaurants/Index';
import RestaurantsShow from './pages/restaurants/Show';
import RestaurantsCreate from './pages/restaurants/Create';
import RestaurantsEdit from './pages/restaurants/Edit';

//User
import UserIndex from './pages/user/Index';

function App() {

  const [authenticated, setAuthenticated] = useState(false)
  let protectedRestaurants;

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setAuthenticated(true)
    }
  })

  const onAuthenticated = (auth, token) => {
    setAuthenticated(auth)
    if (auth) {
      localStorage.setItem('token', token)
    }
    else {
      localStorage.removeItem('token')
    }
  }

  if (authenticated) {
    protectedRestaurants = (
      <>
        <Route path="/restaurants/:id" element={<RestaurantsShow />} />
        <Route path="/restaurants/create" element={<RestaurantsCreate />} />
        <Route path="/restuarants/:id/edit" element={<RestaurantsEdit />} />
      </>
    )
  }

  return (
    <Router>
      <Navbar onAuthenticated={onAuthenticated} authenticated={authenticated} />
      <Container sx={{ p: 15 }}>
        <Routes>
          <Route exact path="/" element={<Welcome onAuthenticated={onAuthenticated} authenticated={authenticated} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/restaurants" element={<RestaurantsIndex />} />
          <Route path="/user" element={<UserIndex />} />
          {protectedRestaurants}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
