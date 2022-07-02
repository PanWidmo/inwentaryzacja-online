import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';

export const ButtonDeleteFixedAsset = ({ text = 'Usun' }) => {
  return (
    <StyledButton name="deleteFixedAsset" onClick={() => alert('dziaua DELETE FIXED ASSET button :)')}>
      {text}
    </StyledButton>
  );
};
