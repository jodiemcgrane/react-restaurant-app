import { Link } from "react-router-dom";
import * as React from 'react';
import moment from 'moment'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import { Avatar, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CommentModal = (props) => {
    return (
        <div>
            <Dialog
                open={props.isOpen}
                //keepMounted
                TransitionComponent={Transition}
                onClose={props.handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>
                    <Stack direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                    >
                        {"User Comment Information"}
                        <Avatar sx={{ bgcolor: '#1976D2' }}>
                            <AccountCircle color='inherit' />
                        </Avatar>
                    </Stack>
                </DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">

                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={2}
                        >
                            <Typography variant="subtitle2">
                                {props.comment.name}
                            </Typography>

                            <Typography variant="subtitle2">
                                {props.comment.email}
                            </Typography>
                        </Stack>

                        <Typography variant="body1" sx={{ mt: 2 }}>
                            {props.comment.text}
                            <br />
                            {props.comment._id}
                        </Typography>

                        <Typography variant="body1" sx={{ mt: 2 }}>
                            {"Posted on " + moment(props.comment.date).format('LLLL')}
                        </Typography>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Link to={`/comment/${props.comment._id}/edit`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <Button variant="outlined" color="warning" onClick={props.handleClose}>Edit</Button>
                    </Link>
                    <Button onClick={props.handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default CommentModal;