import React from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { TitleLeftTop } from 'components/atoms/TitleLeftTop/TitleLeftTop';
import { InfoLabel } from 'components/atoms/InfoLabel/InfoLabel';
import FormField from 'components/molecules/FormField/FormField';
import { LoginProblemLink } from 'components/atoms/LoginProblemLink/LoginProblemLink';
import { Button } from 'components/atoms/Button/Button';

const LoginScreen = () => {
  return (
    <>
      <TitleLeftTop>Logowanie do systemu inwentaryzacji</TitleLeftTop>
      <ViewWrapper as="form">
        <InfoLabel>Wpisz swoje dane:</InfoLabel>
        <FormField label="LOGIN" id="login" name="login" type="text" />
        <FormField label="HASŁO" id="password" name="password" type="password" />
        <LoginProblemLink to="/reset-password">Problem z logowaniem?</LoginProblemLink>
        <Button name="blue" type="submit">
          Zaloguj
        </Button>
      </ViewWrapper>
    </>
  );
};

export default LoginScreen;
