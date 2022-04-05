import React from 'react';

import { TitleLeftTop } from 'components/atoms/TitleLeftTop/TitleLeftTop';
import { SubtitleLeftTop } from 'components/atoms/SubtitleLeftTop/SubtitleLeftTop';
import { Button } from 'components/atoms/Button/Button';
import { LabelAboveInput } from 'components/atoms/LabelAboveInput/LabelAboveInput';
import { Input } from 'components/atoms/Input/Input';
import Table from 'components/atoms/Table/Table';

import { users } from 'mocks/data/users';
import { assets } from 'mocks/data/assets';
import { useAuth } from 'hooks/useAuth';

import { Wrapper, InnerWrapper, TableWrapper } from './UEPanel.styles';

const UEPanel = () => {
  const dane = assets;
  const { signOutUser } = useAuth();

  const handleLogout = () => {
    signOutUser();
  };
  return (
    <Wrapper>
      <div>
        <TitleLeftTop>Edytuj dane: {users[0].imie + ' ' + users[0].nazwisko}</TitleLeftTop>
        <SubtitleLeftTop>Firma XYZ, ul. Wąsacza 1A/20002255</SubtitleLeftTop>
        <Button name="red" where="1" onClick={handleLogout}>
          Wyloguj
        </Button>
      </div>

      <InnerWrapper>
        <hr />
        <form>
          <LabelAboveInput>
            IMIĘ<Input></Input>
          </LabelAboveInput>

          <LabelAboveInput>
            NAZWISKO<Input></Input>
          </LabelAboveInput>

          <LabelAboveInput>
            LOGIN<Input></Input>
          </LabelAboveInput>
        </form>
        <hr />
        <form>
          <LabelAboveInput>
            EMAIL<Input></Input>
          </LabelAboveInput>

          <LabelAboveInput>
            HASŁO<Input></Input>
          </LabelAboveInput>

          <LabelAboveInput>
            UPRAWNIENIA<Input></Input>
          </LabelAboveInput>
        </form>
        <hr />
        <TableWrapper>
          <Table dane={dane} />
        </TableWrapper>
      </InnerWrapper>
      <Button name="red" where="2">
        Usuń
      </Button>
      <Button name="red" where="3">
        Cofnij
      </Button>
      <Button name="blue" where="5">
        Zapisz
      </Button>
      <Button name="green" where="4">
        Zatwierdź
      </Button>
    </Wrapper>
  );
};

export default UEPanel;
