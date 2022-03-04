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
            {/* <strong> Default Macros:</strong> <br /> Protein = 1 g / per lb
            bodyweight
            <br /> Fats = 0.3 g per lb of bodyweight <br /> Carbs = Whatever is
            left over
            <br />
            <br /> */}
            <strong>Recommendations (Default):</strong> <br />
            Protein: Roughly 1 g / lb of bodyweight <br />
            Fats: *Between 0.3 g (Default) - 0.5 g per lb of bodyweight <br />
            Carbs: Whatever is left over <br />
            <br />
            <strong>Recommendations (Losing 50+ lbs):</strong> <br />
            Protein: **10-35% <br />
            Fats: *20-35% <br />
            Carbs: 45-65% <br />
            <br />
            *Going below 0.3 g can be dangerous to your health. <br />
            (Ignore error if losing 50+ lbs)
            <br />
            <br />
            **Calories are protein sparing. The higher calories you have the
            lower the amount of protein is needed. The leaner you get the higher
            amount of protein is needed.
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
