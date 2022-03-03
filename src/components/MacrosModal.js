import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';

import useInputMacros from '../hooks/useInputMacros';
import MacrosModalHelp from './MacrosModalHelp';
import { addUserData, addUserDataFirebase } from '../features/userSlice';

export default function MacrosModal({ open, handleClose, currentUserId }) {
  const { userData } = useSelector(state => state.user);
  const {
    dailyCalories,
    percentProtein,
    percentCarbs,
    percentFats,
    proteinGrams,
    carbsGrams,
    fatsGrams,
    weightInLbs,
  } = userData;
  const dispatch = useDispatch();

  const {
    value: valuePercentProtein,
    handleChangePercentMacro: handleChangePercentProtein,
    macroGrams: newProteinGrams,
    resetDefaultMacros: resetDefaultPercentProtein,
  } = useInputMacros(percentProtein, proteinGrams, dailyCalories);

  const {
    value: valuePercentCarbs,
    handleChangePercentMacro: handleChangePercentCarbs,
    macroGrams: newCarbsGrams,
    resetDefaultMacros: resetDefaultPercentCarbs,
  } = useInputMacros(percentCarbs, carbsGrams, dailyCalories);

  const {
    value: valuePercentFats,
    handleChangePercentMacro: handleChangePercentFats,
    macroGrams: newFatsGrams,
    resetDefaultMacros: resetDefaultPercentFats,
    errorFats,
  } = useInputMacros(percentFats, fatsGrams, dailyCalories, weightInLbs);

  const calcTotalPercent = () => {
    let total = +valuePercentProtein + +valuePercentCarbs + +valuePercentFats;
    return total;
  };

  const cancelAdjustMacros = () => {
    handleClose();
    resetDefaultPercentProtein();
    resetDefaultPercentCarbs();
    resetDefaultPercentFats();
  };

  const addMacros = () => {
    handleClose();

    let newUserData = {
      ...userData,
      percentProtein: valuePercentProtein,
      percentCarbs: valuePercentCarbs,
      percentFats: valuePercentFats,
      proteinGrams: newProteinGrams,
      carbsGrams: newCarbsGrams,
      fatsGrams: newFatsGrams,
    };

    dispatch(
      addUserDataFirebase({
        userData: newUserData,
        currentUserId: currentUserId,
      })
    );

    dispatch(addUserData(newUserData));
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Adjust Macros</DialogTitle>
        <DialogContent>
          <Typography
            sx={{ fontSize: '1.125rem', marginTop: 3 }}
            gutterBottom
            variant="h6"
          >
            Protein
          </Typography>
          <Box
            sx={{
              marginBottom: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <TextField
              margin="dense"
              id="protein"
              label="Protein (%)"
              name="protein"
              type="number"
              variant="outlined"
              sx={{ width: '12rem' }}
              onChange={handleChangePercentProtein}
              value={valuePercentProtein}
              inputProps={{
                min: 0,
                max: 100,
              }}
              autoComplete="off"
            />
            <Typography
              fontWeight={600}
              variant="body"
            >{`${newProteinGrams} g`}</Typography>
          </Box>

          <Typography sx={{ fontSize: '1.125rem' }} gutterBottom variant="h6">
            Carbs
          </Typography>

          <Box
            sx={{
              marginBottom: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <TextField
              margin="dense"
              id="carbs"
              label="Carbs (%)"
              name="carbs"
              type="number"
              variant="outlined"
              sx={{ width: '12rem' }}
              onChange={handleChangePercentCarbs}
              value={valuePercentCarbs}
              inputProps={{
                min: 0,
                max: 100,
              }}
              autoComplete="off"
            />
            <Typography fontWeight={600} variant="body">
              {`${newCarbsGrams} g`}
            </Typography>
          </Box>

          <Typography sx={{ fontSize: '1.125rem' }} gutterBottom variant="h6">
            Fats
          </Typography>
          <Box
            sx={{
              marginBottom: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <TextField
              margin="dense"
              id="fats"
              label="Fats (%)"
              name="fats"
              type="number"
              variant="outlined"
              sx={{ width: '12rem' }}
              onChange={handleChangePercentFats}
              value={valuePercentFats}
              inputProps={{
                min: 0,
                max: 100,
              }}
              autoComplete="off"
              error={errorFats.error}
              helperText={errorFats.helperText}
            />
            <Typography
              fontWeight={600}
              variant="body"
              sx={{ marginLeft: '5rem' }}
            >
              {`${newFatsGrams} g`}
            </Typography>
          </Box>
          <Divider sx={{ mt: 3, mb: 3 }} />

          <Typography
            variant="body"
            sx={{ marginLeft: 1.7 }}
            color={calcTotalPercent() === 100 ? 'success.main' : 'error.main'}
            fontWeight={500}
          >{`${calcTotalPercent()} %`}</Typography>
          <Divider sx={{ mt: 3, mb: 2 }} />
          <MacrosModalHelp />
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelAdjustMacros}>Cancel</Button>
          <Button
            variant="contained"
            disabled={calcTotalPercent() === 100 ? false : true}
            onClick={addMacros}
          >
            Set
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
