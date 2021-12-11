import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

//MUI
import Container from '@mui/material/Container';

//Imported Components
import Navbar from './components/Navbar';

//Imported Pages
import Welcome from './pages/Welcome';
import Register from './pages/Register';
import Home from './pages/Home';

//Restaurants Pages
import RestaurantsIndex from './pages/restaurants/Index';
import RestaurantsShow from './pages/restaurants/Show';

//Comments Pages
import CommentsEdit from './pages/comments/Edit';

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

  //Protected routes - must be authenticated
  if (authenticated) {
    protectedRestaurants = (
      <>
        <Route path="/restaurants/:id" element={<RestaurantsShow />} />
        <Route path="/comment/:id/edit" element={<CommentsEdit />} />
      </>
    )
  }

  return (
    <Router>
      <Navbar onAuthenticated={onAuthenticated} authenticated={authenticated} />
      <Container sx={{ p: 15 }}>
        <Routes>
          <Route exact path="/" element={<Welcome onAuthenticated={onAuthenticated} authenticated={authenticated} />} />
          <Route path="/register" element={<Register onAuthenticated={onAuthenticated} authenticated={authenticated} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/restaurants" element={<RestaurantsIndex />} />
          {protectedRestaurants}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
