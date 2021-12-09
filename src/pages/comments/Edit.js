import { useState, useEffect } from 'react'

import axios from 'axios'

import { TextField, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {

    let navigate = useNavigate()
    let { id } = useParams()

    const [form, setForm] = useState({})
    //const [comment, setComment] = useState({})

    useEffect(() => {
        setForm({
            comment_id: id
        })
    }, [id])

    const handleForm = e => {

        setForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const submitForm = () => {
        console.log(form)

        let token = localStorage.getItem('token')

        axios.put(`http://localhost:8000/comments/update`, form, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(response => {
                navigate("/restaurants")
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <TextField
                id="outlined-basic"
                label="Comment"
                name="updated_comment"
                value={form.updated_comment}
                type="text"
                variant="outlined"
                onChange={handleForm}
                sx={{ m: 1.5 }} />

            <Button onClick={submitForm} variant="contained">Submit</Button>
        </>

    );
}

export default Edit;