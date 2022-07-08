import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';
import { useNavigate } from 'react-router-dom';

export const ButtonBackToLogin = ({ text = 'Powrot' }) => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/user-management');
  };

  return (
    <StyledButton name="backToLogin" onClick={navigateToLogin}>
      {text}
    </StyledButton>
  );
};
