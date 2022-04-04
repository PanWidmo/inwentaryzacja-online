import React from 'react';
import styled from 'styled-components';

import { TitleLeftTop } from 'components/atoms/TitleLeftTop/TitleLeftTop';
import { SubtitleLeftTop } from 'components/atoms/SubtitleLeftTop/SubtitleLeftTop';
import { Button } from 'components/atoms/Button/Button';
import { LabelAboveInput } from 'components/atoms/LabelAboveInput/LabelAboveInput';
import { Input } from 'components/atoms/Input/Input';
import Table from 'components/atoms/Table/Table';

import { users } from 'mocks/data/users';
import { assets } from 'mocks/data/assets';
import { useAuth } from 'hooks/useAuth';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 1.5625em 3.125em;
  div {
    display: flex;
    h1 {
      position: relative;
    }
    h4 {
      top: 3em;
      left: 2.5em;
    }
  }
  hr {
    color: ${({ theme }) => theme.colors.tabGray};
    width: 90%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    position: relative;
  }

  hr {
    color: ${({ theme }) => theme.colors.tabGray};
    width: 90%;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  form {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20%;
  }
  input {
    width: 250px;
  }
`;

const TableWrapper = styled.div`
  width: 60%;
`;

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
