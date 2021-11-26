import axios from "axios"
import { useState } from "react"

// import TextField from '@mui/material/TextField';

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
                props.onAuthenticated(true)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {/* <TextField id="outlined-basic" label="Email" type="email" variant="outlined" />
          <TextField id="outlined-basic" label="Password" type="password" variant="outlined" /> */}

            Email:<input type="text" name="email" onChange={handleForm} />
            Password:<input type="password" name="password" onChange={handleForm} />

            <button onClick={submitForm}>Login</button>

        </div>
    );
}

export default LoginForm;