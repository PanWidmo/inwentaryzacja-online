import React from 'react';

import { StyledTable } from './Table.styles';

const Table = ({ dane, headers }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dane.map((daneData) => (
          <tr key={daneData.a}>
            <td>{daneData.a}</td>
            <td>{daneData.b}</td>
            <td>{daneData.c}</td>
            <td>{daneData.d}</td>
            <td>{daneData.e}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
