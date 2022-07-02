import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';

export const ButtonSendEmail = ({ text = 'Wyslij' }) => {
  return (
    <StyledButton type="submit" name="sendEmail" onClick={() => alert('dziaua WYSLIJ button :)')}>
      {text}
    </StyledButton>
  );
};
