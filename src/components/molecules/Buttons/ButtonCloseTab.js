import React from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';

export const ButtonCloseTab = ({ text = 'Zakoncz' }) => {
  // https://stackoverflow.com/questions/54996850/close-current-browser-tab-on-button-click-using-reactjs
  const closeTab = () => {
    window.open('about:blank', '_self');
    window.close();
  };

  return (
    <StyledButton name="closeTab" onClick={closeTab}>
      {text}
    </StyledButton>
  );
};
