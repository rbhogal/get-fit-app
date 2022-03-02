import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';

import useInputMacros from '../hooks/useInputMacros';
import MacrosModalHelp from './MacrosModalHelp';

export default function MacrosModal({ open, handleClose }) {
  const { userData } = useSelector(state => state.user);
  const {
    dailyCalories,
    percentProtein,
    percentCarbs,
    percentFats,
    proteinGrams,
    carbsGrams,
    fatsGrams,
  } = userData;

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
  } = useInputMacros(percentFats, fatsGrams, dailyCalories);

  const calcTotalPercent = () => {
    let total = +valuePercentProtein + +valuePercentCarbs + +valuePercentFats;
    return total;
  };

  // const calcMacroGrams = () => {
  //   const calPerGramProtein = 4;
  //   const calPerGramCarbs = 4;
  //   const calPerGramFats = 9;

  //   let newProteinGrams =
  //     ((valuePercentProtein / 100) * dailyCalories) / calPerGramProtein;
  //   let newCarbsGrams =
  //     ((valuePercentCarbs / 100) * dailyCalories) / calPerGramCarbs;
  //   let newFatsGrams =
  //     ((valuePercentFats / 100) * dailyCalories) / calPerGramFats;

  //   let macros = {
  //     proteinGrams: newProteinGrams,
  //     carbsGrams: newCarbsGrams,
  //     fatsGrams: newFatsGrams,
  //   };

  //   setMacrosGrams(macros);
  // };

  const cancelAdjustMacros = () => {
    handleClose();
    resetDefaultPercentProtein();
    resetDefaultPercentCarbs();
    resetDefaultPercentFats();
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
            disabled={calcTotalPercent() === 100 ? false : true}
            onClick={handleClose}
          >
            Set
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
