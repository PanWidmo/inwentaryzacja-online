import React from 'react';

import { TitleLeftTop } from 'components/atoms/TitleLeftTop/TitleLeftTop';
import { SubtitleLeftTop } from 'components/atoms/SubtitleLeftTop/SubtitleLeftTop';
import { Button } from 'components/atoms/Button/Button';
import { LabelAboveInput } from 'components/atoms/LabelAboveInput/LabelAboveInput';
import { Input } from 'components/atoms/Input/Input';

import { useAuth } from 'hooks/useAuth';

import { Wrapper, InnerWrapper } from '../../atoms/PanelStyles/PanelStyles';

const NewUserAdding = () => {
  const { signOutUser } = useAuth();

  const handleLogout = () => {
    signOutUser();
  };
  return (
    <Wrapper>
      <div>
        <TitleLeftTop>Dodaj użytkownika</TitleLeftTop>
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
      </InnerWrapper>

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

export default NewUserAdding;
