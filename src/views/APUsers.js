import React from 'react';

import Table from 'components/atoms/Table/Table';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper, InnerWrapper, StyledFooter } from 'assets/styles/TableComponents';
import { users } from 'mocks/data/users';

const APUsers = () => {
  const dane = users;

  return (
    <Wrapper>
      <div>
        <h2>Użytkowicy</h2>
        <h4>Firma XYZ, ul. Wąsacza 1A/20002255</h4>
        <Button name="red" where="1">
          Wyloguj
        </Button>
      </div>
      <InnerWrapper>
        <Table dane={dane} id="usersTable" />
        <Button name="blue" where="2">
          Dodaj
        </Button>
      </InnerWrapper>
      <StyledFooter>
        <Button name="red" where="3">
          Cofnij
        </Button>
        <Button name="green" where="5">
          Zatwierdź
        </Button>
      </StyledFooter>
    </Wrapper>
  );
};

export default APUsers;
