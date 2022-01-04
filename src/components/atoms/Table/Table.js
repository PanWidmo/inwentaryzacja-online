import React, { useState } from 'react';

import { StyledTable } from './Table.styles';

const Table = ({ dane, headers }) => {
  const daneDatas = dane;
  const [sortedField, setSortedField] = useState(null);
  let sortedData = [...daneDatas];
  if (sortedField !== null) {
    sortedData.sort((a, b) => {
      if (a[sortedField] < b[sortedField]) {
        return -1;
      }
      if (a[sortedField] > b[sortedField]) {
        return 1;
      }
      return 0;
    });
  }
  console.log(sortedData);
  return (
    <StyledTable>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>
              <div type="button" onClick={() => setSortedField(`${daneDatas}`)}>
                {header}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((daneData) => (
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
