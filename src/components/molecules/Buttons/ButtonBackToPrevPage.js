import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';
import { useNavigate } from 'react-router-dom';

export const ButtonBackToPrevPage = ({ text = 'Cofnij' }) => {
  const navigate = useNavigate();

  const navigateToPrevPage = () => {
    navigate(-1);
  };

  return (
    <StyledButton name="backToPrevPage" onClick={navigateToPrevPage}>
      {text}
    </StyledButton>
  );
};
