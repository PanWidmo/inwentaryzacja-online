import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { StyledTable } from './Table.styles';

export const Table = ({ dane }) => {
  const [sortedField, setSortedField] = useState(null);
  const headers = dane.map((header) => Object.keys(header));

  let sortedData = [...dane];
  if (sortedField !== null) {
    sortedData.sort((a, b) => {
      if (a[sortedField['header']] < b[[sortedField['header']]]) {
        return -1;
      }
      if (a[sortedField['header']] > b[[sortedField['header']]]) {
        return 1;
      }
      return 0;
    });
  }

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Lp</th>
          {headers[0].map((header) => (
            <th key={header}>
              <div key={header + 1} type="button" onClick={() => setSortedField({ header })}>
                {header[0].toUpperCase() + header.substring(1)}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((daneData, index) => (
          <tr key={index + 1}>
            <td key={index + 1}>{index + 1}</td>
            {Object.values(daneData).map((columnData, index) => (
              <td key={Math.random() + index + 100}>
                <NavLink to={`/user-management/${daneData.id}`}>{columnData}</NavLink>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};
