import React from 'react';
import { Header } from 'components/organisms/Header/Header';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { InfoLabel } from 'components/atoms/InfoLabel/InfoLabel';
import { ContentWrapper } from 'components/organisms/ContentWrapper/ContentWrapper';
import { Button } from 'components/molecules/Button/Button';

export const ResetPasswordForm = () => {
  return (
    <>
      <Header title="Problem z logowaniem" companyName="Compolexos"></Header>
      <ContentWrapper>
        <ViewWrapper>
          {/* TO DO COMPONENT!!*/}
          <InfoLabel>Do zrobienia component!</InfoLabel>
          <Button
            name="confirmResetPassword"
            text="Potwierdz"
            type="submit"
            form="resetPasswordForm"
            onClick={() => alert('dziaua POTWIERDZ RESET PASSOWRD button :)')}
          />
        </ViewWrapper>
      </ContentWrapper>
    </>
  );
};
