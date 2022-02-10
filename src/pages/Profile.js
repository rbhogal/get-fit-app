// import React, { useState } from 'react';

// import { Button, FormControl, Select } from '@mui/material';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';

// import HeightTextField from '../components/text-fields/HeightTextField';
// import NumberTextField from '../components/text-fields/NumberTextField';
// import useInput from '../hooks/useInput';

// const selectSex = {
//   label: 'Sex',
//   selectItems: ['Male', 'Female'],
// };

// const selectGoal = {
//   label: 'Goal',
//   selectItems: ['Fat Loss', 'Muscle Gain'],
// };

// const selectActivityLevel = {
//   label: 'Activity Level',
//   selectItems: [
//     'Sedentary — Desk job and little to no exercise',
//     'Lightly Active — Light exercise/sports 1-3 day/week',
//     'Moderately Active — Moderate exercise/sport 3-5 days/week',
//     'Very Active — Hard exercise/sports 6-7 days/week',
//     'Extremely Active — Hard daily exercise/sports and physical job',
//   ],
// };
// const selectRateOfFatLossMuscleGain = {
//   label: 'Rate',
//   selectItems: [
//     'Slow — 0.5% per lb of bodyweight',
//     'Moderate — 0.7% per lb of bodyweight',
//     'Fast — 1% per lb of bodyweight',
//   ],
// };

// // const convertHeightUnits = (feet, inches) => {
// //   const heightInCm = feet * 30.48 + inches * 2.54;
// //   return heightInCm;
// // };

// const Profile = () => {
//   const {
//     value: enteredSex,
//     isValid: enteredSexIsValid,
//     hasError: sexInputHasError,
//     valueChangeHandler: sexChangedHandler,
//     inputBlurHandler: sexBlurHandler,
//   } = useInput(value => value.trim !== '');

//   const handleSubmit = e => {
//     e.preventDefault();

//     // Run a loop through object

//     for (const input in userData) {
//       console.log(userData[input]);
//     }

//     // If falsy values then setError

//     // console.log('submit');
//   };

//   return (
//     <div>
//       <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
//         <InputLabel>Sex</InputLabel>
//         <Select
//           size="small"
//           value={userData.sex}
//           onChange={handleChange}
//           name={selectSex.label}
//           label={selectSex.label}
//           required
//         >
//           {selectSex.selectItems.map(selectItem => (
//             <MenuItem key={selectItem} value={selectItem}>
//               {selectItem}
//             </MenuItem>
//           ))}
//         </Select>

//         {/* <Button

//         onClick={handleSubmit}
//         type="submit"
//         variant="contained"
//         sx={{ mt: 3, mb: 2 }}
//         style={{ marginLeft: 'auto', marginRight: 'auto' }}
//       >
//         Calculate
//       </Button> */}
//       </FormControl>
//     </div>
//   );
// };

// export default Profile;
