import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';

export const ButtonSaveEditedFixedAsset = ({ text = 'Zatwierdz' }) => {
  return (
    <StyledButton name="saveEditedFixedAsset" onClick={() => alert('dziaua SAVE EDITED FIXED ASSET button :)')}>
      {text}
    </StyledButton>
  );
};
