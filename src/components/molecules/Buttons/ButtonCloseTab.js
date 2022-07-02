import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';

export const ButtonCloseTab = ({ text = 'Zakoncz' }) => {
  return (
    <StyledButton name="closeTab" onClick={() => alert('dziaua ZAKONCZ CLOSE TAB button :)')}>
      {text}
    </StyledButton>
  );
};
