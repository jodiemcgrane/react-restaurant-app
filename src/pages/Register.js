//Components
import RegisterForm from '../components/RegisterForm';

//Styles
import * as styles from '../styles/images.module.css'

//Images
import RegisterImage from '../images/register.svg'

//MUI
import { Grid, Card, CardContent } from '@mui/material';

const Register = (props) => {

    return (
        <Card sx={{ boxShadow: 3 }}>
            <CardContent>
                <Grid container>
                    <Grid item md={6}>

                    {!props.authenticated ? <RegisterForm onAuthenticated={props.onAuthenticated} /> : ""}

                    </Grid>
                    <Grid item md={6}>

                    <img className={styles.image} src={RegisterImage} alt="Register" />

                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default Register;