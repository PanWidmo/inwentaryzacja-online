import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';

export const ButtonConfirmResetPassword = ({ text = 'Potwierdz' }) => {
  return (
    <StyledButton name="confirmResetPassword" onClick={() => alert('dziaua POTWIERDZ RESET PASSOWRD button :)')}>
      {text}
    </StyledButton>
  );
};
