import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

function createData(name, calories) {
  return { name, calories };
}

export default function ResultsTable({
  sex,
  age,
  heightFeet,
  heightInches,
  weight,
  goal,
  poundsToLoseGainPerWeek,
  bmr,
  tdee,
  dailyCalories,
}) {
  const rows = [
    createData('Sex', sex),
    createData('Age', age),
    createData('Height', `${heightFeet} ft ${heightInches} in`),
    createData('Weight', `${weight} lbs`),
    createData('Goal', goal),
    createData(
      `${goal === 'Muscle Gain' ? 'Gain' : 'Lose'}`,
      `${Math.round(poundsToLoseGainPerWeek * 100) / 100} lbs / week`
    ),
    createData('BMR', bmr),
    createData('TDEE (Maintenance)', tdee),
  ];

  return (
    <>
      <TableContainer component={Paper}>
        <Table
          // sx={{ minWidth: '24.786rem' }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: '1.6rem' }}>
                <strong>Results</strong>
              </TableCell>
              <TableCell align="right">{''}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  {row.calories === '' ? 'N/A' : row.calories}
                </TableCell>
              </TableRow>
            ))}
            <TableRow
              key={'Daily Calories'}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                sx={{ fontSize: '1.3rem', fontWeight: 'bolder' }}
                component="th"
                scope="row"
              >
                {'Daily Calories'}
              </TableCell>
              <TableCell
                sx={{ fontSize: '1.3rem', fontWeight: 'bolder' }}
                align="right"
              >
                {dailyCalories}
              </TableCell>
              {}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {dailyCalories < 1200 && dailyCalories !== '' && (
        <Typography
          sx={{ width: '24.786rem', padding: '1rem', color: 'error.main' }}
          variant="body2"
        >
          Eating below <strong>1200 calories</strong> is highly discouraged.
          Please try again.
        </Typography>
      )}
    </>
  );
}
