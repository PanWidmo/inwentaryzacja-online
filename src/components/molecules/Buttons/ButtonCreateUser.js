import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';
import { useNavigate } from 'react-router-dom';

export const ButtonCreateUser = ({ text = 'Dodaj' }) => {
  const navigate = useNavigate();

  const navigateToCreateUser = () => {
    navigate('/user-management/create');
  };

  return (
    <StyledButton name="createUser" onClick={navigateToCreateUser}>
      {text}
    </StyledButton>
  );
};
