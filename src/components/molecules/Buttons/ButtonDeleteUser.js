import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';

export const ButtonDeleteUser = ({ text = 'Usun' }) => {
  return (
    <StyledButton name="deleteUser" onClick={() => alert('dziaua DELETE USER button :)')}>
      {text}
    </StyledButton>
  );
};
