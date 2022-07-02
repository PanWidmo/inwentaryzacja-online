import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';

export const ButtonViewUsers = ({ text = 'Uzytkownicy' }) => {
  return (
    <StyledButton name="viewUsers" onClick={() => alert('dziaua UZYTKOWNICY button :)')}>
      {text}
    </StyledButton>
  );
};
