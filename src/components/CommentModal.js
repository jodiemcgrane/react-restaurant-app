import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const CommentModal = (props) => {
    return (
        <div>
            <Dialog
                open={props.isOpen}
                // keepMounted
                onClose={props.handleClose}
                comments={props.setComments}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Comment Information"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {props.comments.name}
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