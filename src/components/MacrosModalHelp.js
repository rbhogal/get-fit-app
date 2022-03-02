import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function MacrosModalHelp() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="text" onClick={handleClickOpen}>
        Recommendations
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Recommendations'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <strong> Default:</strong> <br /> Protein = 1 g / per lb bodyweight
            <br /> Fats = 0.3 g per lb of bodyweight <br /> Carbs = Whatever is
            left over
            <br />
            <br />
            <strong>Recommended Fats:</strong> 0.3 - 0.5 g per lb of bodyweight.
            <br />
            Do NOT go below 0.3 g
            <br />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
