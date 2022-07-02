import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';

export const ButtonCreateInventory = ({ text = 'Zatwierdz' }) => {
  return (
    <StyledButton name="createInventory" onClick={() => alert('dziaua CREATE INVENTORY button :)')}>
      {text}
    </StyledButton>
  );
};
