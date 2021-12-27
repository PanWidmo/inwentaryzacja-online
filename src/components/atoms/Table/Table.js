import React from 'react';

import { StyledTable } from './Table.styles';

const Table = ({ dane, headders }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {headders.map((headder) => (
            <th key={headder}>{headder}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dane.map((daneData) => (
          <tr key={daneData.lp}>
            <td>{daneData.lp}</td>
            <td>{daneData.imie}</td>
            <td>{daneData.nazwisko}</td>
            <td>{daneData.email}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
