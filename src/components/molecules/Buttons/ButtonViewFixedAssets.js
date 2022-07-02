import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';

export const ButtonViewFixedAssets = ({ text = 'Srodki trwale' }) => {
  return (
    <StyledButton name="viewFixedAssets" onClick={() => alert('dziaua SRODKI TRWALE button :)')}>
      {text}
    </StyledButton>
  );
};
