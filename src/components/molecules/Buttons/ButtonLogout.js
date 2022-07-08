import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';
import { useAuth } from 'hooks/useAuth';

export const ButtonLogout = ({ text = 'Wyloguj' }) => {
  const { signOutUser } = useAuth();

  const handleLogout = () => {
    signOutUser();
  };

  return (
    <StyledButton name="logout" onClick={handleLogout}>
      {text}
    </StyledButton>
  );
};
