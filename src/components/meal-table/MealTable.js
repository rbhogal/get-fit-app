import React, { Fragment } from 'react';

import { Grid, Paper, Box } from '@mui/material';
import { Button } from '@mui/material';
import { useMediaQuery } from '@mui/material';

import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';

const styleTh = {
  border: '1px solid #DDDDDD',
  textAlign: 'left',
  padding: '8px',
  // width: '100%',
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
  formRef,
}) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: { xs: '2rem 0', md: '.5rem' },
        }}
      >
        <Paper>
          <form onSubmit={e => handleEditFormSubmit(e, rowsStringName)}>
            <div
              style={
                {
                  // overflowX: 'auto',
                }
              }
            >
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
                        width: '27.613rem',
                      }}
                    >
                      {title}
                    </th>
                    <th
                      style={{
                        ...styleTh,
                        width: '8rem',
                      }}
                    >
                      Calories
                    </th>
                    <th
                      style={{
                        ...styleTh,
                        width: '8rem',
                      }}
                    >
                      Protein (g)
                    </th>
                    <th
                      style={{
                        ...styleTh,
                        width: '8rem',
                      }}
                    >
                      Carbs (g)
                    </th>
                    <th
                      style={{
                        ...styleTh,
                        width: '8rem',
                      }}
                    >
                      Fats (g)
                    </th>
                    <th
                      style={{
                        ...styleTh,
                        width: '5.2rem',
                      }}
                    ></th>
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
            </div>
          </form>
        </Paper>
        <form
          ref={formRef}
          onSubmit={e =>
            handleAddFormMealDataSubmit(e, rowsStringName, formRef)
          }
        >
          {/*         
          <Paper>
            <Grid container style={{ position: 'relative' }}>
              <Grid item xs={5.13}>
                <input
                  type="text"
                  name="mealName"
                  required="required"
                  // placeholder={`Enter ${mealType} name...`}
                  style={{ ...styleInput }}
                  onChange={handleAddFormMealChange}
                />
              </Grid>
              <Grid item xs={1.48}>
                <input
                  type="number"
                  name="calories"
                  required="required"
                  // placeholder="Calories..."
                  style={{ ...styleInput }}
                  onChange={handleAddFormMealChange}
                />
              </Grid>
              <Grid item xs={1.46}>
                <input
                  type="number"
                  name="protein"
                  required="required"
                  // placeholder="Protein (g)..."
                  style={{ ...styleInput }}
                  onChange={handleAddFormMealChange}
                />
              </Grid>
              <Grid item xs={1.49}>
                <input
                  type="number"
                  name="carbs"
                  required="required"
                  // placeholder="Carbs (g)..."
                  style={{ ...styleInput }}
                  onChange={handleAddFormMealChange}
                />
              </Grid>
              <Grid item xs={2.44}>
                <input
                  type="number"
                  name="fats"
                  required="required"
                  // placeholder="Fats (g)..."
                  style={{ ...styleInput }}
                  onChange={handleAddFormMealChange}
                />
              </Grid>

              <Button
                sx={{
                  position: 'absolute',
                  right: { xs: 'unset', md: '-7rem' },
                  bottom: { xs: '-45px', md: 0 },
                }}
                variant="contained"
                type="submit"
              >
                Add Meal
              </Button>
            </Grid>
          </Paper> */}
        </form>
      </Box>
    </>
  );
};

export default MealTable;
