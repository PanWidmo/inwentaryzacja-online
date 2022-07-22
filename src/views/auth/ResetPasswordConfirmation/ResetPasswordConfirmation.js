import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from 'components/organisms/Header/Header';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { InfoLabel } from 'components/atoms/InfoLabel/InfoLabel';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { Button } from 'components/organisms/Button/Button';
import emailSent from 'assets/icons/emailSent.png';

export const ResetPasswordConfirmation = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate('/auth/login');

  return (
    <>
      <Header title="Problem z logowaniem" companyName="Compolexos"></Header>
      <ContentWrapper>
        <ViewWrapper>
          <img src={emailSent} alt="people_logo" />
          <InfoLabel>Mail został wysłany! </InfoLabel>
          <InfoLabel>Sprawdź swoją skrzynkę odbiorczą</InfoLabel>
          <Button name="blue" text="Powrót do Logowania" type="submit" onClick={handleClick} />
        </ViewWrapper>
      </ContentWrapper>
    </>
  );
};
