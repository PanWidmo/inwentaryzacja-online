import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';

export const ButtonCreateFixedAsset = ({ text = 'Dodaj' }) => {
  return (
    <StyledButton name="createFixedAsset" onClick={() => alert('dziaua TWORZENIE NOWEGO FIXED ASSET button :)')}>
      {text}
    </StyledButton>
  );
};
