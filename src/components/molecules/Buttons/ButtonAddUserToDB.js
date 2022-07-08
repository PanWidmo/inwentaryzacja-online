import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';

export const ButtonAddUserToDB = ({ text = 'Dodaj' }) => {
  return (
    <StyledButton name="addUserToDB" type="submit" form="userForm">
      {text}
    </StyledButton>
  );
};
