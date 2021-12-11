//Components
import LoginForm from "../components/LoginForm";

//Styles
import * as styles from '../styles/images.module.css'

//Images
import LoginImage from '../images/login.svg'

//MUI
import { Grid, Card, CardContent } from '@mui/material';

const Welcome = (props) => {
    return (
        <Card sx={{ boxShadow: 3 }}>
            <CardContent>
                <Grid container>
                    <Grid item md={6}>

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