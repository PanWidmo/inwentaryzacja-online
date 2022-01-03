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
