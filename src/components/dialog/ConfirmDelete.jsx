import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ConfirmDelete({ show, handleClose, handleConfirm}) {

  return (
      <Dialog
        open={show}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Group?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this group? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions> 
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleConfirm} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
  );
}