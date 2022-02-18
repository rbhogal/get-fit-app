import React, { useState, useEffect } from 'react';

import { Grid } from '@mui/material';
import { Button, IconButton } from '@mui/material';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Delete } from '@mui/icons-material';
import { Paper } from '@mui/material';

import BreakfastTable from './tables/BreakfastTable';

/*
const renderDeleteButton = params => {
  return (
    <IconButton>
      <Delete fontSize="small" />
    </IconButton>
  );
};


const columns = [
  {
    field: 'calories',
    headerName: 'Calories',
    type: 'number',
    width: 90,
    editable: true,
  },
  {
    field: 'protein',
    headerName: 'Protein (g)',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'carbs',
    headerName: 'Carbs (g)',
    type: 'number',
    width: 100,
    editable: true,
  },
  {
    field: 'fats',
    headerName: 'Fats (g)',
    type: 'number',
    width: 85,
    editable: true,
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
  {
    field: 'id',
    headerName: 'BREAKFAST',
    flex: 1,
    sortable: false,
    editable: true,
  },
  ...columns,
];
const lunchColumns = [
  {
    field: 'id',
    headerName: 'LUNCH',
    flex: 1,
    sortable: false,
    editable: true,
  },
  ...columns,
];
const dinnerColumns = [
  {
    field: 'id',
    headerName: 'DINNER',
    flex: 1,
    sortable: false,
    editable: true,
  },
  ...columns,
];
const snacksColumns = [
  {
    field: 'id',
    headerName: 'SNACKS',
    flex: 1,
    sortable: false,
    editable: true,
  },
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
*/

const MealPlan = ({ mealPlan }) => {
  const addFood = () => {
    // setRows([...rows]);
  };

  return <BreakfastTable rows={mealPlan.breakfastRows} />;
};
/*
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
          rows={mealPlan.breakfastRows}
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
          onRowEditCommit={handleRowEditCommit}
        />
        <Button
          size="small"
          sx={{
            position: 'absolute',
            left: '1rem',
            bottom: '-2.2rem',
            fontSize: '.7rem',
          }}
          onClick={addFood}
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
          rows={mealPlan.lunchRows}
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
          rows={mealPlan.dinnerRows}
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
          rows={mealPlan.snacksRows}
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
          sx={{
            marginBottom: '2.8rem',
          }}
          rowHeight={35}
          headerHeight={40}
        />
      </Paper>
    </Box>
  );
};


*/
export default MealPlan;
