import React, { useState } from 'react';

import { StyledTable } from './Table.styles';

const Table = ({ dane }) => {
  const daneDatas = dane;
  const [sortedField, setSortedField] = useState(null);
  const headers = daneDatas.map((header) => Object.keys(header));
  //console.log(headers[1]);
  let sortedData = [...daneDatas];
  if (sortedField !== null) {
    sortedData.sort((a, b) => {
      //console.log(a[Object.keys(sortedField)]);
      if (a[sortedField['header']] < b[[sortedField['header']]]) {
        return -1;
      }
      if (a[sortedField['header']] > b[[sortedField['header']]]) {
        return 1;
      }
      return 0;
    });
  }
  //console.log(daneDatas[1]);
  //console.log(Object.keys(daneDatas[1]));
  console.log(sortedField['header']);
  //console.log(sortedData);
  //console.log(daneDatas);

  return (
    <StyledTable>
      <thead>
        <tr>
          {headers[1].map((header) => (
            <th key={header}>
              <div type="button" onClick={() => setSortedField({ header })}>
                {header}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((daneData) => (
          <tr key={daneData.lp}>
            <td>{daneData.lp}</td>
            <td>{daneData.imie}</td>
            <td>{daneData.nazwisko}</td>
            <td>{daneData.email}</td>
            <td>{daneData.e}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
