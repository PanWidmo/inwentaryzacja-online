import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';

export const ButtonDownloadData = ({ text = 'Pobierz' }) => {
  return (
    <StyledButton name="downloadData" onClick={() => alert('dziaua POBIERANIE button :)')}>
      {text}
    </StyledButton>
  );
};
