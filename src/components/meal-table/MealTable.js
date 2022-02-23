import React, { Fragment } from 'react';

import { Grid, Paper, Typography } from '@mui/material';
import { Button } from '@mui/material';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';

const styleTh = {
  border: '1px solid #DDDDDD',
  textAlign: 'left',
  padding: '8px',
};

const styleNumbers = {
  border: '1px solid #DDDDDD',
  textAlign: 'right',
  padding: '8px',
};

const styleInput = {
  fontFamily: 'Inter',
  padding: '0.6rem',
  width: '100%',
  border: '1px solid #DDDDDD',
};

const MealTable = ({
  title,
  rows,
  rowsStringName,
  handleAddFormMealChange,
  handleAddFormMealDataSubmit,
  mealType,
  editMealId,
  handleEditClick,
  editFormMealData,
  handleEditFormMealChange,
  handleEditFormSubmit,
  handleDeleteClick,
}) => {
  return (
    <>
      {/* <Typography variant="h6" sx={{ marginLeft: '.5rem' }}>
        <strong>{title}</strong>
      </Typography> */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.625rem',
          padding: '.5rem',
        }}
      >
        <Paper>
          <form onSubmit={e => handleEditFormSubmit(e, rowsStringName)}>
            <table
              style={{
                borderCollapse: 'collapse',
                width: '100%',
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      ...styleTh,
                      minWidth: '15rem',
                    }}
                  >
                    {title}
                  </th>
                  <th style={styleTh}>Calories</th>
                  <th style={styleTh}>Protein (g)</th>
                  <th style={styleTh}>Carbs (g)</th>
                  <th style={styleTh}>Fats (g)</th>
                  <th style={{ ...styleTh, width: '6rem' }}></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((meal, index) => (
                  <Fragment key={index}>
                    {editMealId === meal.id ? (
                      <EditableRow
                        styleTh={styleTh}
                        styleNumbers={styleNumbers}
                        styleInput={styleInput}
                        editFormMealData={editFormMealData}
                        handleEditFormMealChange={handleEditFormMealChange}
                      />
                    ) : (
                      <ReadOnlyRow
                        meal={meal}
                        styleTh={styleTh}
                        styleNumbers={styleNumbers}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                        rowsStringName={rowsStringName}
                      />
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </form>
        </Paper>
        <form onSubmit={e => handleAddFormMealDataSubmit(e, rowsStringName)}>
          <Paper>
            <Grid container style={{ position: 'relative' }}>
              <Grid item xs={4.43}>
                <input
                  type="text"
                  name="mealName"
                  required="required"
                  // placeholder={`Enter ${mealType} name...`}
                  style={styleInput}
                  onChange={handleAddFormMealChange}
                />
              </Grid>
              <Grid item xs={1.51}>
                <input
                  type="number"
                  name="calories"
                  required="required"
                  // placeholder="Calories..."
                  style={styleInput}
                  onChange={handleAddFormMealChange}
                />
              </Grid>
              <Grid item xs={1.85}>
                <input
                  type="number"
                  name="protein"
                  required="required"
                  // placeholder="Protein (g)..."
                  style={styleInput}
                  onChange={handleAddFormMealChange}
                />
              </Grid>
              <Grid item xs={1.67}>
                <input
                  type="number"
                  name="carbs"
                  required="required"
                  // placeholder="Carbs (g)..."
                  style={styleInput}
                  onChange={handleAddFormMealChange}
                />
              </Grid>
              <Grid item xs={2.54}>
                <input
                  type="number"
                  name="fats"
                  required="required"
                  // placeholder="Fats (g)..."
                  style={styleInput}
                  onChange={handleAddFormMealChange}
                />
              </Grid>

              <Button
                sx={{
                  position: 'absolute',
                  right: '-7rem',
                  bottom: 0,
                }}
                variant="contained"
                type="submit"
              >
                Add Meal
              </Button>
            </Grid>
          </Paper>
        </form>
      </div>
    </>
  );
};

export default MealTable;
