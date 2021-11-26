import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <div className="home">
            <h1>This is the Home page</h1>
            <Link to="/restaurants"> Restaurants</Link>
        </div>
     );
}
 
export default Home;