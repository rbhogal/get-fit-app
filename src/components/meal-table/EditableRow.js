import React from 'react';

import SaveIcon from '@mui/icons-material/Save';
import { IconButton } from '@mui/material';

const styleInput = {
  fontFamily: 'Inter',
  padding: '0.6rem',
  width: '100%',
  border: '1px solid #DDDDDD',
  textAlign: 'right',
};

const EditableRow = ({
  styleTh,
  styleNumbers,

  editFormMealData,
  handleEditFormMealChange,
}) => {
  return (
    <tr style={{ backgroundColor: '#f5f5f4' }}>
      <td style={{ ...styleTh, width: '23.9rem' }}>
        <input
          style={{ ...styleInput, textAlign: 'left' }}
          type={'text'}
          required="required"
          name="mealName"
          value={editFormMealData.mealName}
          onChange={handleEditFormMealChange}
        ></input>
      </td>
      <td style={styleNumbers}>
        <input
          style={styleInput}
          type={'text'}
          required="required"
          name="calories"
          value={editFormMealData.calories}
          onChange={handleEditFormMealChange}
        ></input>
      </td>
      <td style={styleNumbers}>
        <input
          style={styleInput}
          type={'text'}
          required="required"
          name="protein"
          value={editFormMealData.protein}
          onChange={handleEditFormMealChange}
        ></input>
      </td>
      <td style={styleNumbers}>
        <input
          style={styleInput}
          type={'text'}
          required="required"
          name="carbs"
          value={editFormMealData.carbs}
          onChange={handleEditFormMealChange}
        ></input>
      </td>
      <td style={styleNumbers}>
        <input
          style={styleInput}
          type={'text'}
          required="required"
          name="fats"
          value={editFormMealData.fats}
          onChange={handleEditFormMealChange}
        ></input>
      </td>
      <td
        style={{
          border: '1px solid #DDDDDD',
          padding: '8px',
        }}
      >
        <IconButton sx={{ marginLeft: '.7rem' }} type="submit">
          <SaveIcon />
        </IconButton>
      </td>
    </tr>
  );
};

export default EditableRow;
