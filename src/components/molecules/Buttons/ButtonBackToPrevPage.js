import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';
import { useNavigate } from 'react-router-dom';

export const ButtonBackToPrevPage = ({ text = 'Cofnij' }) => {
  const navigate = useNavigate();
  return (
    <StyledButton name="backToPrevPage" onClick={() => navigate(-1)}>
      {text}
    </StyledButton>
  );
};
