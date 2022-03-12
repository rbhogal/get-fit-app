import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { Doughnut } from 'react-chartjs-2';

import { Paper, Stack } from '@mui/material';
import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

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

import {
  addUserData,
  addUserDataFirebase,
  getUserDataFirebase,
} from '../features/userSlice';
import authContext from '../context/authContext';
import MacrosTable from '../components/MacrosTable';
import PageHeader from '../components/PageHeader';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import MacrosModal from '../components/MacrosModal';

ChartJS.register(ArcElement, Tooltip, Legend);

// Katch-McArdle Multipliers
const activityLevelMultipliers = {
  Sedentary: 1.2,
  'Lightly Active': 1.375,
  'Moderately Active': 1.55,
  'Very Active': 1.725,
  'Extremely Active': 1.9,
};

const ratePercentages = {
  Maintain: 0,
  Slow: 0.005,
  Moderate: 0.007,
  Fast: 0.01,
};

const Profile = () => {
  const dispatch = useDispatch();
  const authCtx = useContext(authContext);
  const currentUserId = authCtx.currentUserId;
  const { userData } = useSelector(state => state.user);
  const { userStatsExist } = userData;
  const [openMacrosModal, setOpenMacrosModal] = React.useState(false);

  const handleClickOpenMacrosModal = () => {
    setOpenMacrosModal(true);
  };

  const handleCloseMacrosModal = () => {
    setOpenMacrosModal(false);
  };

  useEffect(() => {
    // This is to persist the data
    if (!currentUserId) return;
    dispatch(getUserDataFirebase(currentUserId));
  }, [currentUserId, dispatch]);

  const doughnutChartData = {
    labels: [
      `Protein (${userData.percentProtein}%)`,
      `Carbs (${userData.percentCarbs}%)`,
      `Fats (${userData.percentFats}%)`,
    ],
    datasets: [
      {
        label: 'Macros',
        data: [
          userData.percentProtein,
          userData.percentCarbs,
          userData.percentFats,
        ],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  };

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

  const calcMacros = (weightInLbs, dailyCalories) => {
    let enteredFat = 0.3;
    //   a) Protein = 1g of protein per 1b a day
    let proteinGrams = +weightInLbs;

    //   b) Fats = 0.3 - 0.5 g per pound lb per day
    let fatsGrams = `${enteredFat}` * weightInLbs;
    fatsGrams = Math.round(fatsGrams);

    //   C) Carbs =
    //   carbsInCalories = dailyCalorie - [ (proteinGram * 4kcal /1g of protein) + (fatsGrams * 9kcal / 1g of fat) ]
    //   carbsGrams = carbsInCalories * 1 g of carbs / 4 kcal

    let carbsCalories = dailyCalories - (proteinGrams * 4 + fatsGrams * 9);
    let carbsGrams = carbsCalories / 4;
    carbsGrams = Math.round(carbsGrams);

    let percentProtein = Math.round(((4 * proteinGrams) / dailyCalories) * 100);
    let percentCarbs = Math.round(((4 * carbsGrams) / dailyCalories) * 100);
    let percentFats = Math.round(((9 * fatsGrams) / dailyCalories) * 100);

    return {
      proteinGrams,
      carbsGrams,
      fatsGrams,
      percentProtein,
      percentCarbs,
      percentFats,
    };
  };

  /**
   * Calculates BMR, TDEE, Daily Calories & Macros
   */
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

    ///////////////////////////////////////////////////////////////////////////////
    // 1) BMR -- Mifflin & St. Jeor Equation (weightInKg, heightInCm)
    if (sex === 'Male') {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age + 5;
    }

    if (sex === 'Female') {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age - 161;
    }

    ///////////////////////////////////////////////////////////////////////////////
    // 2) TDEE = (BMR x Activity Level)
    let tdee = bmr * activityLevelMultipliers[`${activityLevel}`];

    ///////////////////////////////////////////////////////////////////////////////
    // 3) Daily Calories = lbs (to lose or gain) per week * 3500 kcal / 7 days
    let caloricDeficitOrSurplus = (poundsToLoseGainPerWeek * 3500) / 7;

    if (goal === 'Fat Loss') {
      dailyCalories = tdee - caloricDeficitOrSurplus;
    }

    if (goal === 'Muscle Gain') {
      dailyCalories = tdee + caloricDeficitOrSurplus;
    }

    if (goal === 'Maintain') {
      dailyCalories = tdee;
    }

    ///////////////////////////////////////////////////////////////////////////////
    // 4) Macros

    let macros = calcMacros(weightInLbs, dailyCalories);
    let {
      proteinGrams,
      carbsGrams,
      fatsGrams,
      percentProtein,
      percentCarbs,
      percentFats,
    } = macros;

    let newUserData = {
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
      proteinGrams: proteinGrams,
      carbsGrams: carbsGrams,
      fatsGrams: fatsGrams,
      percentProtein,
      percentCarbs,
      percentFats,
      userStatsExist: true,
    };

    dispatch(
      addUserDataFirebase({
        userData: newUserData,
        currentUserId: currentUserId,
      })
    );

    dispatch(addUserData(newUserData));
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
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <PageHeader title={'Profile'} divider={true} />
        </Grid>

        <Grid item xs={12} xl={8}>
          <Box>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
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
                      <div
                        style={{ display: 'flex', justifyContent: 'flex-end' }}
                      >
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
                        enteredGoal={enteredGoal}
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

            <Typography sx={{ paddingTop: '.5rem' }} variant="body2">
              *Calculator based on Mifflin St. Jeor Equation.{' '}
              <a
                style={{ color: 'inherit' }}
                href="https://github.com/rbhogal/get-fit-app/blob/main/README.md#how-did-you-calculate-calories-and-macros"
                target="_blank"
                rel="noreferrer"
              >
                Learn More
              </a>
              .
            </Typography>

            <Typography sx={{ paddingTop: '.5rem' }} variant="body2">
              {`**Calculated suggested macros are accurate for those losing <50 lbs. If
            losing 50+ lbs, adjust your macros and see recommendations.`}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} xl={4}>
          {_.isEmpty(userData.sex) && userStatsExist ? (
            <Stack spacing={0.2}>
              <Skeleton variant="rectangular" height={58} />
              <Skeleton variant="rectangular" height={52} />
              <Skeleton variant="rectangular" height={52} />
              <Skeleton variant="rectangular" height={52} />
              <Skeleton variant="rectangular" height={52} />
              <Skeleton variant="rectangular" height={52} />
              <Skeleton variant="rectangular" height={52} />
              <Skeleton variant="rectangular" height={52} />
              <Skeleton variant="rectangular" height={52} />
              <Skeleton variant="rectangular" height={58} />
            </Stack>
          ) : (
            <Box>
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
          )}

          <Box
            sx={{
              margin: '2.5rem 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {_.isEmpty(userData.sex) && userStatsExist ? (
              <Stack width={'100%'} spacing={0.2}>
                <Skeleton variant="rectangular" height={58} />
                <Skeleton variant="rectangular" height={52} />
                <Skeleton variant="rectangular" height={52} />
                <Skeleton variant="rectangular" height={52} />
              </Stack>
            ) : (
              <MacrosTable
                proteinGrams={userData.proteinGrams}
                carbsGrams={userData.carbsGrams}
                fatsGrams={userData.fatsGrams}
                percentProtein={userData.percentProtein}
                percentCarbs={userData.percentCarbs}
                percentFats={userData.percentFats}
              />
            )}

            {!_.isEmpty(userData.sex) && (
              <>
                <MacrosModal
                  open={openMacrosModal}
                  handleClose={handleCloseMacrosModal}
                  currentUserId={currentUserId}
                />
                <Button
                  onClick={handleClickOpenMacrosModal}
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  style={{ marginBottom: 0 }}
                >
                  Adjust Macros?
                </Button>
              </>
            )}
          </Box>

          {!_.isEmpty(doughnutChartData.datasets[0].data) && (
            <Box sx={{ margin: '2.5rem 0' }}>
              <Doughnut data={doughnutChartData} />
            </Box>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
