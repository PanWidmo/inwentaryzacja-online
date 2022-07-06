import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';
import { Link } from 'react-router-dom';

export const ButtonCreateFixedAsset = ({ text = 'Dodaj' }) => {
  return (
    <Link to="/fixed-asset-management/create">
      <StyledButton name="createFixedAsset">{text}</StyledButton>
    </Link>
  );
};
