import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';

export const ButtonBackToLogin = ({ text = 'Powrot' }) => {
  return (
    <StyledButton name="backToLogin" onClick={() => alert('dziaua POWROT DO LOGIN button :)')}>
      {text}
    </StyledButton>
  );
};
