import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from 'components/organisms/Header/Header';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { InfoLabel } from 'components/atoms/InfoLabel/InfoLabel';
import { ContentWrapper } from 'components/organisms/ContentWrapper/ContentWrapper';
import { ButtonBackToLogin } from 'components/molecules/Buttons/ButtonBackToLogin';

export const ResetPasswordConfirmation = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/');
  return (
    <>
      <Header title="Problem z logowaniem" companyName="Compolexos"></Header>
      <ContentWrapper>
        <ViewWrapper>
          <InfoLabel>Mail został wysłany!</InfoLabel>
          <InfoLabel>Sprawdź swoją skrzynkę odbiorczą</InfoLabel>
          <ButtonBackToLogin />
        </ViewWrapper>
      </ContentWrapper>
    </>
  );
};
