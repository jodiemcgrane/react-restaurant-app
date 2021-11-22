import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

//Imported Components

//Imported Pages
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
