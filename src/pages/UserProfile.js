import React, { useState } from 'react';
import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';

import SelectSex from '../components/select/SelectSex';
import SelectGoal from '../components/select/SelectGoal';
import AgeTextField from '../components/text-fields/AgeTextField';
import WeightTextField from '../components/text-fields/WeightTextField';
import ResultsTable from '../components/ResultsTable';
import SelectActivityLevel from '../components/select/SelectActivityLevel';
import SelectRate from '../components/select/SelectRate';
import useInput from '../hooks/useInput';
import FeetTextField from '../components/text-fields/FeetTextField';
import InchesTextField from '../components/text-fields/InchesTextField';

const UserProfile = () => {
  const [userData, setUserData] = useState({
    sex: '',
    age: '',
    height: '',
    weight: '',
    goal: '',
    activityLevel: '',
    rateOfFatLossMuscleGain: '',
    bmr: '',
    tdee: '',
    calories: '',
  });
  const formIsValid = false;

  // console.log(userData);

  /* 
    Calculate Calories & Macros
    /////////////////////////////////////////////////

    **Notes:
    ------------------------------------------------

    Don't go below 0.3 g per lb for FATS


    Equations:
    --------------------------------------------------
    
    The Mifflin St. Jeor Equation (kcal/day)

    Men:
    (10 x weight in kg) + (6.25 heigh in cm) - (5 x age in years) + 5
    Women: 
    (10 x weight in kg) + (6.25 height in cm) - (5 x age in years) -161

    Macros:
    Protein & Carbs: = 4 kcal / 1 g
    Fats = 9 calories / 1 g

    1) BMR = Mifflin & St. Jeor Equation 
    2) TDEE = (BMR x Activity Level)
    3) Daily Calories = TDEE x (Rate of Fat Loss/ Muscle Gain)
    4) Macros:
       Protein (g) = weight (lbs) 
       Fats (g) = 0.3g x weight (lbs)
       Carbs (g) = ( Daily Calories (kcal) - [fats (g) * 9 kcal/g] kcal  - [protein (g) * 4 kcal/g] kcal  ) / 4 grams of carbs

    


    Variables
    --------------------------------------------------
    BRM: weight (kg), height (cm), age (yrs)

    Activity Levels =
    * Sedentary —  (multiply by 1.2)
    * Lightly Active —  (multiply by 1.375)
    * Moderately Active —  (multiply by 1.55)
    * Very Active — (multiply by 1.725)
    * Extremely Active —  (multiply by 1.9) 

    Rate of Fat Loss/ Muscle Gain
    Slow/Safest = 0.5% per lb of bodyweight
    Moderate = 0.7% per lb of bodyweight
    Fast = 1% of per lb of bodyweight
    

    Calculations
    -------------------------------------------------- 
    
    

  */

  const {
    value: enteredSex,
    isValid: enteredSexIsValid,
    hasError: sexInputHasError,
    valueChangeHandler: sexChangeHandler,
    setIsFormSubmittedToTrue: setIsFormSubmittedToTrueSex,
  } = useInput(value => value !== '');

  const {
    value: enteredAge,
    isValid: enteredAgeIsValid,
    hasError: ageInputHasError,
    valueChangeHandler: ageChangeHandler,
    setIsFormSubmittedToTrue: setIsFormSubmittedToTrueAge,
  } = useInput(value => value !== '');

  const {
    value: enteredFeet,
    isValid: enteredFeetIsValid,
    hasError: feetInputHasError,
    valueChangeHandler: feetChangeHandler,
    setIsFormSubmittedToTrue: setIsFormSubmittedToTrueFeet,
  } = useInput(value => value !== '');

  const {
    value: enteredInches,
    isValid: enteredInchesIsValid,
    hasError: inchesInputHasError,
    valueChangeHandler: inchesChangeHandler,
    setIsFormSubmittedToTrue: setIsFormSubmittedToTrueInches,
  } = useInput(value => value !== '');

  const {
    value: enteredWeight,
    isValid: enteredWeightIsValid,
    hasError: weightInputHasError,
    valueChangeHandler: weightChangeHandler,
    setIsFormSubmittedToTrue: setIsFormSubmittedToTrueWeight,
  } = useInput(value => value !== '');

  const {
    value: enteredGoal,
    isValid: enteredGoalIsValid,
    hasError: goalInputHasError,
    valueChangeHandler: goalChangeHandler,
    setIsFormSubmittedToTrue: setIsFormSubmittedToTrueGoal,
  } = useInput(value => value !== '');

  const {
    value: enteredActivityLevel,
    isValid: enteredActivityLevelIsValid,
    hasError: activityLevelInputHasError,
    valueChangeHandler: activityLevelChangeHandler,
    setIsFormSubmittedToTrue: setIsFormSubmittedToTrueActivityLevel,
  } = useInput(value => value !== '');

  const {
    value: enteredRate,
    isValid: enteredRateIsValid,
    hasError: rateInputHasError,
    valueChangeHandler: rateChangeHandler,
    setIsFormSubmittedToTrue: setIsFormSubmittedToTrueRate,
  } = useInput(value => value !== '');

  const convertHeightUnits = (feet, inches) => {
    const heightInCm = feet * 30.48 + inches * 2.54;
    return heightInCm;
  };

  const handleSubmit = () => {
    setIsFormSubmittedToTrueSex();
    setIsFormSubmittedToTrueAge();
    setIsFormSubmittedToTrueFeet();
    setIsFormSubmittedToTrueInches();
    setIsFormSubmittedToTrueWeight();
    setIsFormSubmittedToTrueGoal();
    setIsFormSubmittedToTrueActivityLevel();
    setIsFormSubmittedToTrueRate();

    if (
      enteredSexIsValid &&
      enteredAgeIsValid &&
      enteredFeetIsValid &&
      enteredInchesIsValid &&
      enteredWeightIsValid &&
      enteredGoalIsValid &&
      enteredActivityLevelIsValid &&
      enteredRateIsValid
    ) {
      // calc the suff yada yada...
      console.log('submit data');
      // console.log(enteredSex);
      // console.log(enteredFeet);
    }
  };

  /* 
  const handleChange = e => {
    if (e.target.name === 'Sex') {
      setUserData({ ...userData, sex: e.target.value });
    }
    if (e.target.name === 'Age') {
      setUserData({ ...userData, age: e.target.value });
    }

    if (e.target.name === 'feet' || e.target.name === 'inches') {
      const heightInCm = convertHeightUnits();
      setUserData({ ...userData, height: heightInCm });
    }

    if (e.target.name === 'Weight') {
      const weightInKg = e.target.value * 2.20462;
      setUserData({ ...userData, weight: weightInKg });
    }

    if (e.target.name === 'Goal') {
      setUserData({ ...userData, goal: e.target.value });
    }

    if (e.target.name === 'Activity Level') {
      setUserData({ ...userData, activityLevel: e.target.value });
    }

    if (e.target.name === 'Rate') {
      setUserData({ ...userData, rateOfFatLossMuscleGain: e.target.value });
    }
  };
 */

  return (
    <div>
      <Box sx={{ margin: '2.5rem 22% 0 22%' }}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <strong> Sex</strong>
                </TableCell>
                <TableCell size="small" align="right">
                  <SelectSex
                    value={enteredSex}
                    error={sexInputHasError}
                    onChange={sexChangeHandler}
                  />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <strong>Age</strong>
                </TableCell>
                <TableCell size="small" align="right">
                  <AgeTextField
                    value={enteredAge}
                    error={ageInputHasError}
                    onChange={ageChangeHandler}
                  />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <strong>Height</strong>
                </TableCell>
                <TableCell size="small" align="right">
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <FeetTextField
                      value={enteredFeet}
                      error={feetInputHasError}
                      onChange={feetChangeHandler}
                    />
                    <InchesTextField
                      value={enteredInches}
                      error={inchesInputHasError}
                      onChange={inchesChangeHandler}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <strong>Weight</strong>
                </TableCell>
                <TableCell size="small" align="right">
                  <WeightTextField
                    value={enteredWeight}
                    error={weightInputHasError}
                    onChange={weightChangeHandler}
                  />
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <strong>Goal</strong>
                </TableCell>
                <TableCell size="small" align="right">
                  <SelectGoal
                    value={enteredGoal}
                    error={goalInputHasError}
                    onChange={goalChangeHandler}
                  />
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <strong>Activity Level</strong>
                </TableCell>
                <TableCell size="small" align="right">
                  <SelectActivityLevel
                    value={enteredActivityLevel}
                    error={activityLevelInputHasError}
                    onChange={activityLevelChangeHandler}
                  />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <strong>Rate of Fat Loss/Muscle Gain</strong>
                </TableCell>
                <TableCell size="small" align="right">
                  <SelectRate
                    value={enteredRate}
                    error={rateInputHasError}
                    onChange={rateChangeHandler}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ textAlign: 'right', marginRight: '1.25rem' }}>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          >
            Calculate
          </Button>
        </Box>
        <ResultsTable />
      </Box>
    </div>
  );
};

export default UserProfile;
