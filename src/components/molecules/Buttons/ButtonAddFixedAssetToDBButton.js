import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';

export const ButtonAddFixedAssetToDBButton = ({ text = 'Dodaj' }) => {
  return (
    <StyledButton name="addFixedAssetToDB" type="submit" form="fixedAssetForm">
      {text}
    </StyledButton>
  );
};
