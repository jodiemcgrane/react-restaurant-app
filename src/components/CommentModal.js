import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import { Typography } from '@mui/material';

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
                // comments={props.setComments}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Comment Information"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">

                        <Typography variant="body1">
                            Name: {props.comment.name}
                        </Typography>

                        <Typography variant="body1">
                            User Email: {props.comment.email}
                        </Typography>

                        <Typography variant="body1">
                            {props.comment.text}
                        </Typography>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default CommentModal;