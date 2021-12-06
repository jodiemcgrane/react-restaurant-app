import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import axios from 'axios'
import moment from 'moment'

//MUI
import { Grid, Box } from '@mui/material';
import { Typography, Card, CardHeader, CardContent, Avatar, Chip, Stack, Popover, InputBase, Paper } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

import { ListItemText, List, ListItem, ListItemAvatar } from '@mui/material';

import PulseLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/react";

const Show = () => {

    //Loader CSS
    const override = css`
    position: fixed;/
    top: 50%;
    left: 50%;
    bottom: 25%;
`;

    //Popover
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    //Restaurant & Comments

    let navigate = useNavigate()
    let { id } = useParams()
    const [restaurant, setRestaurant] = useState(null)
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(false);

    let token = localStorage.getItem('token')

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:8000/restaurants/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response.data.restaurant)
                setRestaurant(response.data.restaurant)
                setComments(response.data.restaurant.comments)
                setLoading(false);
            })
            .catch(err => {
                console.log(`Error: ${err}`)
            })
    }, [id, token])

    //Create Comment

    const [form, setForm] = useState({})

    useEffect(() => {
        setForm({
            restaurant_id: id,
        })
    }, [restaurant])

    const handleForm = e => {

        setForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const submitForm = () => {
        console.log(form)

        let token = localStorage.getItem('token')

        axios.post('http://localhost:8000/comments/create', form, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response.data)
                navigate(`/restaurants/${id}`)
            })
            .catch(err => console.log(err))
    }

    if (!restaurant) return null
    if (!comments) return null



    return (
        <Box
            display="flex"
            justifyContent="center"
        >
            <Grid
                item md={8}
            >
                <Card
                    sx={{ boxShadow: 3, p: 2 }}
                >
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: '#1976D2' }}>
                                <RestaurantIcon color='inherit' />
                            </Avatar>
                        }
                        title={restaurant.name}
                        subheader={restaurant.borough}
                        action={
                            restaurant.grades[1].grade === "A" ? (
                                <Chip label={restaurant.grades[1].grade} color="success" sx={{ p: 1, mt: 1, mr: 1 }} />
                            ) : (<Chip label={restaurant.grades[1].grade} color="warning" sx={{ p: 1, mt: 1, mr: 1 }} />)
                        }
                    >
                    </CardHeader>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center'

                    }}>
                        <CardContent>

                            <Stack direction="row" spacing={12} sx={{ mb: 5 }}>
                                <Typography variant="h5">
                                    Building No.
                                    <Typography variant="body2" color="text.secondary">
                                        {restaurant.address.building}
                                    </Typography>
                                </Typography>

                                <Typography variant="h5">
                                    Street
                                    <Typography variant="body2" color="text.secondary">
                                        {restaurant.address.street}
                                    </Typography>
                                </Typography>

                                <Typography variant="h5">
                                    Zipcode
                                    <Typography variant="body2" color="text.secondary">
                                        {restaurant.address.zipcode}
                                    </Typography>
                                </Typography>
                            </Stack>

                            <Stack
                                sx={{
                                    p: 1
                                }}
                                direction="row"
                            >
                                <Typography variant="h5">
                                    Score
                                    <Typography variant="h1" color="text.secondary">
                                        {restaurant.grades[1].score + ".0"}
                                    </Typography>
                                </Typography>
                            </Stack>

                            <Stack sx={{ mt: 5 }}>
                                <Typography variant="h5">Comments</Typography>

                                {loading ? (<PulseLoader
                                    css={override}
                                    size={10}
                                    color={"#1976D2"}
                                />) : (
                                    <List>
                                        {comments
                                            .map((comments) => {
                                                return (
                                                    <ListItem>

                                                        <ListItemAvatar>
                                                            <Avatar sx={{ bgcolor: '#1976D2' }}>
                                                                <AccountCircle color='inherit' />
                                                            </Avatar>
                                                        </ListItemAvatar>

                                                        <ListItemText
                                                            primary={comments.name}
                                                            secondary={
                                                                <>
                                                                    <Typography
                                                                        sx={{ display: 'inline' }}
                                                                        component="span"
                                                                        variant="body2"
                                                                        color="text.primary"
                                                                    >
                                                                        {comments.text}
                                                                    </Typography>
                                                                    <br />
                                                                    {" — " + moment(comments.date).format('LL')}

                                                                </>
                                                            }
                                                        />
                                                        <Stack sx={{ mt: 1.5 }}>
                                                            <IconButton
                                                                sx={{
                                                                    display: 'flex',
                                                                    justifyContent: 'flex-end'
                                                                }}
                                                                aria-owns={open ? 'mouse-over-popover' : undefined}
                                                                aria-haspopup="true"
                                                                onMouseEnter={handlePopoverOpen}
                                                                onMouseLeave={handlePopoverClose}
                                                            >
                                                                <CommentIcon color='primary' fontSize='large' />
                                                            </IconButton>
                                                            <Popover
                                                                id="mouse-over-popover"
                                                                sx={{
                                                                    pointerEvents: 'none',
                                                                }}
                                                                open={open}
                                                                anchorEl={anchorEl}
                                                                anchorOrigin={{
                                                                    vertical: 'bottom',
                                                                    horizontal: 'center',
                                                                }}
                                                                transformOrigin={{
                                                                    vertical: 'top',
                                                                    horizontal: 'center',
                                                                }}
                                                                onClose={handlePopoverClose}
                                                                disableRestoreFocus
                                                            >
                                                                <Typography sx={{ p: 1 }}>See More</Typography>
                                                            </Popover>
                                                        </Stack>
                                                    </ListItem>
                                                );
                                            })}
                                    </List>
                                )
                                }
                                <Paper
                                    component="form"
                                    sx={{ p: '2px 4px', mt: 2, display: 'flex', alignItems: 'center' }}
                                >
                                    <InputBase
                                        sx={{ ml: 1, flex: 1 }}
                                        placeholder="Add Comment"
                                        type="text"
                                        name="comment"
                                        onChange={handleForm}
                                    />
                                    <IconButton
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'flex-end'
                                        }}
                                        type='submit'
                                        onClick={submitForm}
                                    >
                                        <AddCircleRoundedIcon color='primary' fontSize='large' />
                                    </IconButton>
                                </Paper>
                            </Stack>
                        </CardContent>
                    </Box>
                </Card>
            </Grid>
        </Box >

    );
}

export default Show;