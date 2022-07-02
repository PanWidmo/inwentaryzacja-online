import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';

export const ButtonSaveEditedUser = ({ text = 'Zatwierdz' }) => {
  return (
    <StyledButton name="saveEditedUser" onClick={() => alert('dziaua SAVE EDITED USER button :)')}>
      {text}
    </StyledButton>
  );
};
