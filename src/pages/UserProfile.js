import React, { useState } from 'react';
import { Paper } from '@mui/material';
import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import { useMediaQuery } from '@mui/material';

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

const activityLevelMultipliers = {
  Sedentary: 1.2,
  'Lightly Active': 1.375,
  'Moderately Active': 1.55,
  'Very Active': 1.725,
  'Extremely Active': 1.9,
};

const ratePercentages = {
  Slow: 0.005,
  Moderate: 0.007,
  Fast: 0.01,
};

const UserProfile = () => {
  const [userData, setUserData] = useState({
    sex: '',
    age: '',
    heightFeet: '',
    heightInches: '',
    weightInLbs: '',
    goal: '',
    activityLevel: '',
    rateOfFatLossMuscleGain: '',
    poundsToLoseGainPerWeek: '',
    bmr: '',
    tdee: '',
    dailyCalories: '',
  });

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

  const convertHeightToCm = (feet, inches) => {
    const heightInCm = feet * 30.48 + inches * 2.54;
    return heightInCm;
  };

  const convertWeightToKg = weightInLbs => {
    return weightInLbs / 2.20462;
  };

  const activityLevelSlice = enteredActivityLevel => {
    let indexOfEmDash = enteredActivityLevel.indexOf('—') - 1;
    let activityLevelSlice = enteredActivityLevel.substring(0, indexOfEmDash);
    return activityLevelSlice;
  };

  const rateSlice = enteredRate => {
    let indexOfEmDash = enteredRate.indexOf('—') - 1;
    let rateSlice = enteredRate.substring(0, indexOfEmDash);
    return rateSlice;
  };

  const calcResults = () => {
    let user = {
      sex: enteredSex,
      age: +enteredAge,
      heightInCm: convertHeightToCm(enteredFeet, enteredInches),
      weightInLbs: enteredWeight,
      weightInKg: convertWeightToKg(enteredWeight),
      goal: enteredGoal,
      activityLevel: activityLevelSlice(enteredActivityLevel),
      rateOfFatLossMuscleGain: rateSlice(enteredRate),
    };
    const {
      sex,
      age,
      heightInCm,
      weightInLbs,
      weightInKg,
      goal,
      activityLevel,
      rateOfFatLossMuscleGain,
    } = user;
    let poundsToLoseGainPerWeek =
      weightInLbs * ratePercentages[`${rateOfFatLossMuscleGain}`];
    let bmr = '';
    let dailyCalories = '';

    console.log(poundsToLoseGainPerWeek);

    // 1) BMR -- Mifflin & St. Jeor Equation (weightInKg, heightInCm)
    if (sex === 'Male') {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age + 5;
    }

    if (sex === 'Female') {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age - 161;
    }

    // 2) TDEE = (BMR x Activity Level)
    let tdee = bmr * activityLevelMultipliers[`${activityLevel}`];

    // 3) Daily Calories = lbs (to lose or gain) per week * 3500 kcal / 7 days
    let caloricDeficitOrSurplus = (poundsToLoseGainPerWeek * 3500) / 7;
    console.log(
      `bmr: ${bmr}, tdee: ${tdee}, caloric deficit: ${caloricDeficitOrSurplus}`
    );

    if (goal === 'Fat Loss') {
      dailyCalories = tdee - caloricDeficitOrSurplus;
    }

    if (goal === 'Muscle Gain') {
      dailyCalories = tdee + caloricDeficitOrSurplus;
    }

    console.log(dailyCalories);
    // bmr, tdee, dailyCalories

    setUserData({
      ...userData,
      sex: enteredSex,
      age: enteredAge,
      heightFeet: enteredFeet,
      heightInches: enteredInches,
      weightInLbs: enteredWeight,
      goal: enteredGoal,
      activityLevel: activityLevelSlice(enteredActivityLevel),
      rateOfFatLossMuscleGain: rateSlice(enteredRate),
      poundsToLoseGainPerWeek: poundsToLoseGainPerWeek,
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      dailyCalories: Math.round(dailyCalories),
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
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
      calcResults();
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <Box sx={{ margin: '2.5rem 0% 0 0%' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: '52.286rem' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: '1.6rem' }}>
                  <strong>Calculator</strong>
                </TableCell>
                <TableCell align="right">{''}</TableCell>
              </TableRow>
            </TableHead>
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
                  <strong>Weight (lbs)</strong>
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

        <Box sx={{ textAlign: 'right' }}>
          <Button
            fullWidth
            onClick={handleSubmit}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          >
            Calculate
          </Button>
        </Box>
      </Box>
      <Box sx={{ marginTop: '2.5rem' }}>
        <ResultsTable
          sex={userData.sex}
          age={userData.age}
          heightFeet={userData.heightFeet}
          heightInches={userData.heightInches}
          weight={userData.weightInLbs}
          goal={userData.goal}
          poundsToLoseGainPerWeek={userData.poundsToLoseGainPerWeek}
          bmr={userData.bmr}
          tdee={userData.tdee}
          dailyCalories={userData.dailyCalories}
        />
      </Box>
    </div>
  );
};

export default UserProfile;
