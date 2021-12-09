import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

import * as styles from '../styles/form.module.css'

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const RegisterForm = (props) => {

    let navigate = useNavigate();

    const [form, setForm] = useState({})

    const handleForm = e => {

        setForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const submitForm = () => {
        console.log(form)

        axios.post(`http://localhost:8000/users/register`, {
            name: form.name,
            email: form.email,
            password: form.password
        })
            .then(response => {
                console.log(response.data.auth_token)
                props.onAuthenticated(true, response.data.auth_token)
                navigate('/home', { replace: true })
            })
            .catch(err => console.log(err))
    }

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="60vh"
        >
            <Grid item md={6}>
                <Typography variant="h4" sx={{ mb: 1 }}>
                    RestaurantsReviews
                </Typography>
                <Typography className={styles.grey} sx={{ mb: 1 }} variant="subtitle1">
                    Please sign-up with your details below.
                </Typography>
                <FormGroup>
                    <FormControl>

                        <TextField
                            id="outlined-basic"
                            label="Name"
                            type="name"
                            name="name"
                            variant="outlined"
                            onChange={handleForm}
                            sx={{ m: 1.5 }} />

                        <TextField
                            id="outlined-basic"
                            label="Email"
                            type="email"
                            name="email"
                            variant="outlined"
                            onChange={handleForm}
                            sx={{ m: 1.5 }} />

                        <TextField
                            id="outlined-basic"
                            label="Password"
                            type="password"
                            name="password"
                            variant="outlined"
                            onChange={handleForm}
                            sx={{ m: 1.5 }} />

                        <Typography
                            className={styles.grey}
                            sx={{ mb: 1 }}
                            variant="subtitle1">
                            Already have an account? Login <Link to="/" underline="hover">here</Link>.
                        </Typography>

                        <Typography
                            align="center"
                        >
                            <Button
                                variant="contained"
                                size="large"
                                sx={{ m: 1, minWidth: 175 }}
                                onClick={submitForm}
                            >
                                Register
                            </Button>
                        </Typography>


                    </FormControl>
                </FormGroup>
            </Grid>
        </Box>
    );
}

export default RegisterForm;