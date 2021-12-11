import { useLocation } from 'react-router-dom'

//MUI


const PageNotFound = () => {

    let location = useLocation();

    return (
        <div>
            <p>Soz page not found :( {location.pathname} wasnt found</p>
        </div>
    );
}

export default PageNotFound;