import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { StyledTable } from 'components/organisms/Table/Table.styles';

export const Table = ({ dane, dataName }) => {
  const [sortedField, setSortedField] = useState(null);
  const headers = dane.map((header) => Object.keys(header));
  const changedHeaders = headers[0].map((header) => {
    switch (header) {
      case 'id':
        return (header = 'Numer/Nazwa');
      case 'name':
        return (header = 'Nazwa');
      case 'inventoryNumber':
        return (header = 'Numer inwentarzowy');
      case 'serialNumber':
        return (header = 'Numer seryjny');
      case 'description':
        return (header = 'Opis');
      case 'hasInventoried':
        return (header = 'Zinwentaryzowany');
      case 'surname':
        return (header = 'Nazwisko');
      case 'phoneNumber':
        return (header = 'Telefon');
      case 'startDate':
        return (header = 'Data rozpoczęcia');
      case 'closeDate':
        return (header = 'Data zakończenia');
      default:
        return header;
    }

  });

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
          {changedHeaders.map((header) => (
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
            {Object.values(daneData).map((columnData, index) =>
              columnData === false || columnData === true ? (
                <td key={Math.random() + index + 100}>
                  <input type="checkbox" defaultChecked={columnData} />
                </td>
              ) : (
                <td key={Math.random() + index + 100}>
                  <NavLink to={`/${dataName}-management/${daneData.id}`}>{columnData}</NavLink>
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};
