import React from 'react';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

const ReadOnlyRow = ({
  meal,
  styleTh,
  styleNumbers,
  handleEditClick,
  handleDeleteClick,
  rowsStringName,
}) => {
  return (
    <tr style={{ backgroundColor: '#f5f5f4' }}>
      <td style={styleTh}>{meal.mealName}</td>
      <td style={styleNumbers}>{meal.calories}</td>
      <td style={styleNumbers}>{meal.protein}</td>
      <td style={styleNumbers}>{meal.carbs}</td>
      <td style={styleNumbers}>{meal.fats}</td>
      <td
        style={{
          border: '1px solid #DDDDDD',
          width: '5.2rem',
        }}
      >
        <IconButton aria-label="Edit" onClick={e => handleEditClick(e, meal)}>
          <EditIcon />
        </IconButton>
        <IconButton
          aria-label="Delete"
          type="button"
          onClick={() => handleDeleteClick(meal.id, rowsStringName)}
        >
          <DeleteIcon />
        </IconButton>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
