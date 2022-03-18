import React, { useState, useEffect } from 'react';

import { StyledTable } from './Table.styles';

const Table = ({ dane }) => {
  const [sortedField, setSortedField] = useState(null);
  const headers = dane.map((header) => Object.keys(header));
  const [lp, setLp] = useState(1);

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
          {headers[1].map((header) => (
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
          <tr key={daneData.lp}>
            <td key={index + 1}>{index + 1}</td>
            {Object.values(daneData).map((columnData) => (
              <>
                <td>{columnData}</td>
              </>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
