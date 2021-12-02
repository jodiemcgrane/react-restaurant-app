import LoginForm from "../components/LoginForm";

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

const Welcome = (props) => {
    return (
        <Grid container>
            <Grid item md={6}>

                <h1>The Welcome Page</h1>
                {!props.authenticated ? <LoginForm onAuthenticated={props.onAuthenticated} /> : ""}

            </Grid>
            <Grid item md={6}>

                <h1>The Welcome Page</h1>
                {!props.authenticated ? <LoginForm onAuthenticated={props.onAuthenticated} /> : ""}

            </Grid>
        </Grid>

    );
}

export default Welcome;