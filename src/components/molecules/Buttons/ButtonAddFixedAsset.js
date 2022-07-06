import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';

export const ButtonAddFixedAsset = ({ text = 'Dodaj' }) => {
  return <StyledButton name="addFixedAsset">{text}</StyledButton>;
};
