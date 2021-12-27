import React from 'react';

import { Table } from 'components/atoms/Table/Table';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper, InnerWrapper, StyledFooter } from './APUsers.styles';
import { users } from 'mocks/data/users';

const APUsers = () => {
  const headders = ['Lp.', 'Imie', 'Nazwisko', 'E-mail', 'Dodakowe informacje'];

  return (
    <Wrapper>
      <div>
        <h2>Użytkowicy</h2>
        <h3>Firma XYZ, ul. Wąsacza 1A/20002255</h3>
        <Button name="red" where="1">
          Wyloguj
        </Button>
      </div>
      <InnerWrapper>
        <Table>
          <thead>
            <tr>
              {headders.map((headder) => (
                <th>{headder}</th>
              ))}
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
        <Button name="blue" where="2">
          Dodaj
        </Button>
      </InnerWrapper>
      <StyledFooter>
        <Button name="red" where="3">
          Cofnij
        </Button>
        <Button name="blue" where="4">
          Zapisz
        </Button>
        <Button name="green" where="5">
          Zatwierdź
        </Button>
      </StyledFooter>
    </Wrapper>
  );
};

export default APUsers;
