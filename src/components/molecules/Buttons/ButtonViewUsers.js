import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';
import { useNavigate } from 'react-router-dom';

export const ButtonViewUsers = ({ text = 'Uzytkownicy' }) => {
  const navigate = useNavigate();

  const navigateToUsers = () => {
    navigate('/user-management');
  };

  return (
    <StyledButton name="viewUsers" onClick={navigateToUsers}>
      {text}
    </StyledButton>
  );
};
