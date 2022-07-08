import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';
import { useNavigate } from 'react-router-dom';

export const ButtonCreateFixedAsset = ({ text = 'Dodaj' }) => {
  const navigate = useNavigate();

  const navigateToCreateFixedAsset = () => {
    navigate('/fixed-asset-management/create');
  };

  return (
    <StyledButton name="createFixedAsset" onClick={navigateToCreateFixedAsset}>
      {text}
    </StyledButton>
  );
};
