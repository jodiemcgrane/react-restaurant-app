import axios from './../config';

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

//Styles
import * as styles from '../styles/form.module.css'

//MUI
import { 
    Grid,
    Box,
    TextField,
    FormGroup,
    FormControl,
    Button,
    Typography
 } from '@mui/material';

const LoginForm = (props) => {

    let navigate = useNavigate();

    const [form, setForm] = useState({ email: "jodie@middle.earth", password: "secret123" })

    const handleForm = e => {

        setForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const submitForm = () => {
        console.log(form)

        axios.post(`/users/login`, {
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
            minHeight="50vh"
        >
            <Grid item md={6}>
                <Typography variant="h4" sx={{ mb: 1 }}>
                    RestaurantsReviews
                </Typography>
                <Typography className={styles.grey} sx={{ mb: 1 }} variant="subtitle1">
                    Please login below
                </Typography>
                <FormGroup>
                    <FormControl>

                        <TextField
                            id="outlined-basic"
                            label="Email"
                            type="email"
                            variant="outlined"
                            onChange={handleForm}
                            sx={{ m: 1.5 }} />

                        <TextField
                            id="outlined-basic"
                            label="Password"
                            type="password"
                            variant="outlined"
                            onChange={handleForm}
                            sx={{ m: 1.5 }} />

                        <Typography
                            className={styles.grey}
                            sx={{ mb: 1 }}
                            variant="subtitle1">
                            Not a member? Register <Link to="/register" underline="hover">here</Link>.
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
                                Login
                            </Button>
                        </Typography>


                    </FormControl>
                </FormGroup>
            </Grid>
        </Box>
    );
}

export default LoginForm;