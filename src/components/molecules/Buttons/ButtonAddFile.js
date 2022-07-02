import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';

export const ButtonAddFile = ({ text = 'Dodaj plik' }) => {
  return (
    <StyledButton name="addFile" onClick={() => alert('dziaua DODAJ PLIK button :)')}>
      {text}
    </StyledButton>
  );
};
