import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import { Divider } from '@mui/material';

export default function WelcomeDialog({
  open,
  handleCloseAlert,
  handleClickYes,
  handleCheckbox,
}) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleCloseAlert}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Welcome!'}</DialogTitle>
        <DialogContent>
          <DialogContentText component={'span'} id="alert-dialog-description">
            <strong>Getting Started</strong>
            <Divider sx={{ mt: 1, mb: 3 }}></Divider>
            <strong>1. Create a Profile</strong> <br />
            Go to the profile tab to calculate your calories and macros. Adjust
            your macros if needed.
            <br />
            <br />
            <strong>2. Create Meals</strong> <br />
            Enter your meals in the meal planner. The totals at the bottom will
            let you know how many calories and grams you need to add or remove
            to meet your goals.
            <br />
            {/* <FormControlLabel
              sx={{ mt: 1 }}
              control={<Checkbox />}
              label="Don't show again"
              onChange={handleCheckbox}
            /> */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickYes} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
