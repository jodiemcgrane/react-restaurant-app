import LoginForm from "../components/LoginForm";

import * as styles from '../styles/welcome.module.css'

import LoginImage from '../images/login.svg'

import Grid from '@mui/material/Grid';

//Card MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Welcome = (props) => {
    return (
        <Card>
            <CardContent>
                <Grid container>
                    <Grid item md={6}>

                        <h1>The Welcome Page</h1>
                        {!props.authenticated ? <LoginForm onAuthenticated={props.onAuthenticated} /> : ""}

                    </Grid>
                    <Grid item md={6}>

                        <img className={styles.image} src={LoginImage} alt="Login" />

                    </Grid>
                </Grid>
            </CardContent>
        </Card>

    );
}

export default Welcome;