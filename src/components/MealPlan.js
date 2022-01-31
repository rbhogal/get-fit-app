import * as React from 'react';
import { Button, IconButton } from '@mui/material';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Delete } from '@mui/icons-material';
import { Paper } from '@mui/material';

const renderDeleteButton = params => {
  return (
    <IconButton>
      <Delete fontSize="small" />
    </IconButton>
  );
};

const columns = [
  { field: 'calories', headerName: 'Calories', type: 'number', width: 90 },
  { field: 'protein', headerName: 'Protein (g)', type: 'number', width: 110 },
  {
    field: 'carbs',
    headerName: 'Carbs (g)',
    type: 'number',
    width: 100,
  },
  {
    field: 'fats',
    headerName: 'Fats (g)',
    type: 'number',
    width: 85,
  },
  {
    field: 'delete',
    headerName: '',
    width: 55,
    sortable: false,
    renderCell: renderDeleteButton,
  },
];

const breakfastColumns = [
  { field: 'id', headerName: 'BREAKFAST', flex: 1, sortable: false },
  ...columns,
];
const lunchColumns = [
  { field: 'id', headerName: 'LUNCH', flex: 1, sortable: false },
  ...columns,
];
const dinnerColumns = [
  { field: 'id', headerName: 'DINNER', flex: 1, sortable: false },
  ...columns,
];
const snacksColumns = [
  { field: 'id', headerName: 'SNACKS', flex: 1, sortable: false },
  ...columns,
];

const totalColumns = [
  { field: 'id', headerName: 'TOTAL', flex: 1, sortable: false },
  {
    field: 'calories',
    headerName: 'Calories',
    type: 'number',
    width: 90,
    sortable: false,
  },
  {
    field: 'protein',
    headerName: 'Protein (g)',
    type: 'number',
    width: 110,
    sortable: false,
  },
  {
    field: 'carbs',
    headerName: 'Carbs (g)',
    type: 'number',
    width: 100,
    sortable: false,
  },
  {
    field: 'fats',
    headerName: 'Fats (g)',
    type: 'number',
    width: 85,
    sortable: false,
  },
  {
    field: 'delete',
    headerName: '',
    type: null,
    width: 55,
    sortable: false,
  },
];

const rows = [
  { id: 'Burrito', calories: 486, protein: 36, carbs: 35, fats: 15 },
  { id: 'Bulgogi Meal Prep', calories: 545, protein: 38, carbs: 27, fats: 14 },
  // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
];

const MealPlan = () => {
  return (
    <Box sx={{ padding: '0 15%' }}>
      <Paper
        sx={{
          position: 'relative',
          boxShadow:
            '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        }}
      >
        <DataGrid
          rows={rows}
          columns={breakfastColumns}
          autoHeight
          rowsPerPageOptions={[5]}
          density="compact"
          disableColumnFilter
          disableColumnMenu
          editMode="row"
          hideFooter
          sx={{ marginBottom: '2.8rem' }}
          rowHeight={35}
          headerHeight={40}
        />
        <Button
          size="small"
          sx={{
            position: 'absolute',
            left: '1rem',
            bottom: '-2.2rem',
            fontSize: '.7rem',
          }}
          variant="contained"
        >
          Add Food
        </Button>
      </Paper>

      <Paper
        sx={{
          position: 'relative',
          boxShadow:
            '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        }}
      >
        <DataGrid
          rows={rows}
          columns={lunchColumns}
          autoHeight
          rowsPerPageOptions={[5]}
          density="compact"
          disableColumnFilter
          disableColumnMenu
          editMode="row"
          hideFooter
          sx={{
            marginBottom: '2.8rem',
            boxShadow:
              '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          }}
          rowHeight={35}
          headerHeight={40}
        />
        <Button
          size="small"
          sx={{
            position: 'absolute',
            left: '1rem',
            bottom: '-2.2rem',
            fontSize: '.7rem',
          }}
          variant="contained"
        >
          Add Food
        </Button>
      </Paper>

      <Paper
        sx={{
          position: 'relative',
          boxShadow:
            '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        }}
      >
        <DataGrid
          rows={rows}
          columns={dinnerColumns}
          autoHeight
          rowsPerPageOptions={[5]}
          density="compact"
          disableColumnFilter
          disableColumnMenu
          editMode="row"
          hideFooter
          sx={{
            marginBottom: '2.8rem',
            boxShadow:
              '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          }}
          rowHeight={35}
          headerHeight={40}
        />
        <Button
          size="small"
          sx={{
            position: 'absolute',
            left: '1rem',
            bottom: '-2.2rem',
            fontSize: '.7rem',
          }}
          variant="contained"
        >
          Add Food
        </Button>
      </Paper>

      <Paper
        sx={{
          position: 'relative',
          boxShadow:
            '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        }}
      >
        <DataGrid
          rows={rows}
          columns={snacksColumns}
          autoHeight
          rowsPerPageOptions={[5]}
          density="compact"
          disableColumnFilter
          disableColumnMenu
          editMode="row"
          hideFooter
          sx={{
            marginBottom: '2.8rem',
            boxShadow:
              '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          }}
          rowHeight={35}
          headerHeight={40}
        />
        <Button
          size="small"
          sx={{
            position: 'absolute',
            left: '1rem',
            bottom: '-2.2rem',
            fontSize: '.7rem',
          }}
          variant="contained"
        >
          Add Food
        </Button>
      </Paper>

      <Paper
        sx={{
          boxShadow:
            '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        }}
      >
        <DataGrid
          rows={[]}
          columns={totalColumns}
          autoHeight
          rowsPerPageOptions={[5]}
          density="compact"
          disableColumnFilter
          disableColumnMenu
          editMode="row"
          hideFooter
          isRowSelectable={false}
          sx={{
            marginBottom: '2.8rem',
            boxShadow:
              '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          }}
          rowHeight={35}
          headerHeight={40}
        />
      </Paper>
    </Box>
  );
};

export default MealPlan;
