import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';

export const ButtonBackToPrevPage = ({ text = 'Cofnij' }) => {
  return (
    <StyledButton name="backToPrevPage" onClick={() => alert('dziaua BACK TO PREV PAGE button :)')}>
      {text}
    </StyledButton>
  );
};
