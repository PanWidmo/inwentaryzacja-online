import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';

export const ButtonCreateUser = ({ text = 'Dodaj' }) => {
  return (
    <StyledButton name="createUser" onClick={() => alert('dziaua TWORZENIE NOWEGO USERA button :)')}>
      {text}
    </StyledButton>
  );
};
