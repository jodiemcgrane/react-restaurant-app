import RegisterForm from '../components/RegisterForm';

import * as styles from '../styles/images.module.css'

import RegisterImage from '../images/register.svg'

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


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