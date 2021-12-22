import React from 'react';

import { Table } from 'components/atoms/Table/Table';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper } from './APUsers.styles';
import { users } from 'mocks/data/users';

const APUsers = () => {
  return (
    <Wrapper>
      <div>
        <h2>Użytkowicy</h2>
        <h3>Firma XYZ, ul. Wąsacza 1A/20002255</h3>
        <Button name="red2">Wyloguj</Button>
      </div>
      <div>
        <Table>
          <thead>
            <tr>
              <th>LP.</th>
              <th>Imie</th>
              <th>Nazwisko</th>
              <th>E-mail</th>
              <th>Dodatkowe informacje</th>
            </tr>
          </thead>
          <tbody>
            {users.map((userData) => (
              <tr key={userData.lp}>
                <td>{userData.lp}</td>
                <td>{userData.imie}</td>
                <td>{userData.nazwisko}</td>
                <td>{userData.email}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Button name="red">Cofnij</Button>
      <Button name="blue">Zapisz</Button>
      <Button name="green">Zatwierdź</Button>
    </Wrapper>
  );
};

export default APUsers;
