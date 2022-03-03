import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, percent, grams) {
  return { name, percent, grams };
}

export default function MacrosTable({
  proteinGrams,
  carbsGrams,
  fatsGrams,
  percentProtein,
  percentCarbs,
  percentFats,
}) {
  const rows = [
    createData('Protein', `${percentProtein}%`, `${proteinGrams} g`),
    createData('Carbs', `${percentCarbs}%`, `${carbsGrams} g`),
    createData('Fats', `${percentFats}%`, `${fatsGrams} g`),
  ];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: '1.6rem' }}>
              {' '}
              <strong>Macros</strong>
            </TableCell>
            <TableCell align="right">percent</TableCell>
            <TableCell align="right">grams</TableCell>
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
              <TableCell align="right">{row.percent}</TableCell>
              <TableCell align="right">
                <strong> {row.grams} </strong>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
