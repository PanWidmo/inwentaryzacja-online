import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TitleLeftTop } from 'components/atoms/TitleLeftTop/TitleLeftTop';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { InfoLabel } from 'components/atoms/InfoLabel/InfoLabel';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

const ResetPassword = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/reset-password-confirmation', { replace: true });
  return (
    <>
      <TitleLeftTop>Problem z logowaniem</TitleLeftTop>
      <ViewWrapper as="form">
        <InfoLabel>Wpisz swój adres email:</InfoLabel>
        <FormField label="EMAIL" id="email" name="email" type="text" />
        <Button type="submit" onClick={handleClick}>
          Wyślij
        </Button>
      </ViewWrapper>
    </>
  );
};

export default ResetPassword;
