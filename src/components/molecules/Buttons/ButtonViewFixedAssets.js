import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';
import { useNavigate } from 'react-router-dom';

export const ButtonViewFixedAssets = ({ text = 'Srodki trwale' }) => {
  const navigate = useNavigate();

  const navigateToFixedAssets = () => {
    navigate('/fixed-asset-management');
  };

  return (
    <StyledButton name="viewFixedAssets" onClick={navigateToFixedAssets}>
      {text}
    </StyledButton>
  );
};
