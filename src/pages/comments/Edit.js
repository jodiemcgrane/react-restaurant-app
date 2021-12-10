import { useState, useEffect } from 'react'

import axios from 'axios'

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { TextField, Button, Divider } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom'

const Edit = () => {

    let navigate = useNavigate()
    let { id } = useParams()

    const [form, setForm] = useState({})

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
                console.log(response.data)
                navigate("/restaurants")
            })
            .catch(err => console.log(err))
    }

    const submitDelete = () => {
        console.log(form)

        let token = localStorage.getItem('token')

        axios.delete(`http://localhost:8000/comments/delete`, {
            data: { comment_id: id },
            headers: { "Authorization": `Bearer ${token}` }
        })
            .then(response => {
                console.log(response.data)
            })
            .catch(err => {
                console.log(err.stack)
                console.log(err.response)
            })
    }

    return (
        <Grid
            container
            alignItems="center"
            justifyContent="center"
        >
            <Card sx={{
                boxShadow: 3,
                minWidth: 400,
            }}
            >

                <CardContent>
                    <Stack
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        spacing={18}
                    >
                        <Typography variant="h5" color="text.secondary">
                            Edit Comment
                        </Typography>

                        <EditIcon color='primary' style={{ fontSize: 35 }} />
                    </Stack>

                    <Divider sx={{ mt: 1 }} />

                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        minHeight="30vh"
                    >
                        <Stack
                            direction="column"
                            justifyContent="space-around"
                            alignItems="center"
                            spacing={2}
                        >

                            <TextField
                                label="Update Comment"
                                name="updated_comment"
                                value={form.updated_comment}
                                type="text"
                                variant="outlined"
                                onChange={handleForm} />

                            <Button
                                onClick={submitForm}
                                variant="contained"
                                sx={{ minWidth: 175 }}
                            >
                                Update</Button>

                        </Stack>
                    </Box >
                </CardContent>

                <Link to="/restaurants">
                    <Button variant="text" startIcon={<ArrowBackOutlinedIcon />} sx={{ ml: 1, mb: 1 }}>
                        Restaurants
                    </Button>

                </Link>
                <Button onClick={submitDelete} variant="outlined" sx={{ ml: 1, mb: 1 }}>
                    Delete
                </Button>

            </Card>
        </Grid>

    );
}

export default Edit;