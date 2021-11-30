import axios from "axios"
import { useState } from "react"

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const LoginForm = (props) => {

    const [form, setForm] = useState({ email: "jodie@middle.earth", password: "secret123" })

    const handleForm = e => {

        setForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const submitForm = () => {
        console.log(form)

        axios.post(`http://localhost:8000/users/login`, {
            email: form.email,
            password: form.password
        })
            .then(response => {
                console.log(response.data.auth_token)
                props.onAuthenticated(true, response.data.auth_token)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <TextField
                id="outlined-basic"
                label="Email"
                type="email"
                variant="outlined"
                onChange={handleForm} />

            <TextField
                id="outlined-basic"
                label="Password"
                type="password"
                variant="outlined"
                onChange={handleForm} />

            <Button variant="contained" onClick={submitForm}>Login</Button>

        </div>
    );
}

export default LoginForm;