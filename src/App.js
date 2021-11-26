import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

//Imported Components
import Navbar from './components/Navbar';

//Imported Pages
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import RestaurantsIndex from './pages/restaurants/Index';

function App() {

  const [authenticated, setAuthenticated] = useState(false)

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

  return (
    <Router>
      <Navbar onAuthenticated={onAuthenticated} authenticated={authenticated} />
      <Routes>
        <Route exact path="/" element={<Welcome onAuthenticated={onAuthenticated} authenticated={authenticated} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/restaurants" element={<RestaurantsIndex />} />
      </Routes>
    </Router>
  );
}

export default App;
