import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  item-align: center;
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 25px 50px;
  border: 1px solid red;
  color: ${({ theme }) => theme.colors.blue};
`;

const Table = styled.table`
  color: ${({ theme }) => theme.colors.black};
  border-collapse: collapse;
  width: 100%;
  td,
  th {
    border: 1px solid ${({ theme }) => theme.colors.tabBorderGray};
    padding: 8px;
  }
  tr:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.tabGray};
  }
  tr:hover {
    background-color: ${({ theme }) => theme.colors.tabBorderGray};
  }
  th {
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const Button = styled.button`
  margin: 15px 0;
  padding: 7px 20px;
  background-color: ${({ theme, name }) => {
    if (name === 'red') return theme.colors.red;
    if (name === 'green') return theme.colors.green;
    if (name === 'blue') return theme.colors.blue;
  }};
  position: absolute;
  bottom: 40px;
  right: ${({ name }) => {
    if (name === 'red') return '100vw-50px';
    if (name === 'green') return '50px';
    if (name === 'blue') return '200px';
  }};
  border-radius: 5px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  :active {
    transform: translateY(4px);
  }
`;

const APUsers = () => {
  return (
    <Wrapper>
      <div>
        <h2>Użytkowicy</h2>
        <h3>Firma XYZ, ul. Wąsacza 1A/20002255</h3>
      </div>
      <div>
        <Table>
          <thead>
            <tr>
              <th>LP.</th>
              <th>Imie</th>
              <th>Nazwisko</th>
              <th>Sprzęt</th>
              <th>Usuń</th>
            </tr>
          </thead>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </Table>
      </div>

      <Button name="red">Wyloguj</Button>
      <Button name="blue">Zapisz</Button>
      <Button name="green">Zatwierdź</Button>
    </Wrapper>
  );
};

export default APUsers;
