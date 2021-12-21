import React from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { TitleLeftTop } from 'components/atoms/TitleLeftTop/TitleLeftTop';
import FormField from 'components/molecules/FormField/FormField';
import { SubmitButton } from 'components/atoms/SubmitButton/SubmitButton';

const LoginScreen = () => {
  return (
    <>
      <TitleLeftTop>Logowanie do systemu inwentaryzacji</TitleLeftTop>
      <ViewWrapper as="form">
        <FormField label="LOGIN" id="name" name="name" type="text" />
        <FormField label="HASŁO" id="name" name="name" type="password" />
        <label>Problem z zalogowaniem</label>
        {/* zamiast label dodac linka i routera */}
        <SubmitButton type="submit">Zaloguj</SubmitButton>
      </ViewWrapper>
    </>
  );
};

export default LoginScreen;
