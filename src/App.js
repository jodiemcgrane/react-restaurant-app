import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

//Imported Components

//Imported Pages
import Home from './pages/Home';
import RestaurantsIndex from './pages/restaurants/Index';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/restaurants" element={<RestaurantsIndex />} />
      </Routes>
    </Router>
  );
}

export default App;
