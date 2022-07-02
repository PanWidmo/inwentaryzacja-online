import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';

export const ButtonLogout = ({ text = 'Wyloguj' }) => {
  return (
    <StyledButton name="logout" onClick={() => alert('dziaua LOGOUT button :)')}>
      {text}
    </StyledButton>
  );
};
