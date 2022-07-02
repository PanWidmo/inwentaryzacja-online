import React from 'react';
import { Header } from 'components/organisms/Header/Header';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { InfoLabel } from 'components/atoms/InfoLabel/InfoLabel';
import { ContentWrapper } from 'components/organisms/ContentWrapper/ContentWrapper';
import { ButtonConfirmResetPassword } from 'components/molecules/Buttons/ButtonConfirmResetPassword';
export const ResetPasswordForm = () => {
  return (
    <>
      <Header title="Problem z logowaniem" companyName="Compolexos"></Header>
      <ContentWrapper>
        <ViewWrapper>
          {/* TO DO COMPONENT!!*/}
          <InfoLabel>do zrobienia component!</InfoLabel>
          <ButtonConfirmResetPassword />
        </ViewWrapper>
      </ContentWrapper>
    </>
  );
};
