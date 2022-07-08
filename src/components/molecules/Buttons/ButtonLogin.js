import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';

export const ButtonLogin = ({ text = 'Zaloguj' }) => {
  return (
    <StyledButton type="submit" name="login">
      {text}
    </StyledButton>
  );
};
