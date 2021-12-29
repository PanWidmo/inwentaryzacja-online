import React from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { TitleLeftTop } from 'components/atoms/TitleLeftTop/TitleLeftTop';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { LoginProblemButton } from 'components/atoms/LoginProblemButton/LoginProblemButton';

const LoginScreen = () => {
  return (
    <>
      <TitleLeftTop>Logowanie do systemu inwentaryzacji</TitleLeftTop>
      <ViewWrapper as="form">
        <FormField label="LOGIN" id="login" name="login" type="text" />
        <FormField label="HASŁO" id="password" name="password" type="password" />
        <LoginProblemButton>Problem z zalogowaniem?</LoginProblemButton>
        <Button type="submit">Zaloguj</Button>
      </ViewWrapper>
    </>
  );
};

export default LoginScreen;
