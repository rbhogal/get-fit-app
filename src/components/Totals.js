import React from 'react';

const styleHeading = {
  // border: '1px solid #DDDDDD',
  textAlign: 'right',
  padding: '8px',
  fontWeight: 'bold',
};

const styleNumbers = {
  backgroundColor: '#e7e5e4',
  textAlign: 'right',
  padding: '8px',
};

const styleNumbersDelta = {
  color: 'rgb(211, 47, 47)',
  backgroundColor: '#e7e5e4',
  textAlign: 'right',
  padding: '8px',
  fontWeight: 'bold',
};

const styleInput = {
  fontFamily: 'Inter',
  padding: '0.6rem',
  width: '100%',
  border: '1px solid #DDDDDD',
};

const Totals = () => {
  return (
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
              ...styleHeading,
              width: '24.5rem',
              textAlign: 'right',
            }}
          >
            TOTALS
          </th>
          <th style={{ ...styleNumbers, width: '8.1rem' }}>2000</th>
          <th style={{ ...styleNumbers, width: '10.1rem' }}>170</th>
          <th style={{ ...styleNumbers, width: '9rem' }}>200</th>
          <th style={{ ...styleNumbers, width: '7.8rem' }}>60</th>
          <th style={{ ...styleNumbers, width: '6.4rem' }}></th>
        </tr>
      </thead>
      <tbody>
        <tr style={{}}>
          <td style={styleHeading}>+/-</td>
          <td style={styleNumbersDelta}>-2</td>
          <td style={styleNumbersDelta}>-2</td>
          <td style={styleNumbersDelta}>-2</td>
          <td style={styleNumbersDelta}>-2</td>
          <td style={styleNumbersDelta}></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Totals;
