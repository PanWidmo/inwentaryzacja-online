import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({ theme, name }) => {
    if (name === 'login') return theme.colors.blueBackgroundColor;
    if (name === 'logout') return theme.colors.redBackgroundColor;
    if (name === 'sendEmail') return theme.colors.blueBackgroundColor;
    if (name === 'backToLogin') return theme.colors.blueBackgroundColor;
    if (name === 'confirmResetPassword') return theme.colors.blueBackgroundColor;
    if (name === 'closeTab') return theme.colors.greenBackgroundColor;
    if (name === 'navigateTo') return theme.colors.greenBackgroundColor;
    if (name === 'viewFixedAssets') return theme.colors.greenBackgroundColor;
    if (name === 'downloadData') return theme.colors.greenBackgroundColor;
    if (name === 'addFile') return theme.colors.greenBackgroundColor;
    if (name === 'create') return theme.colors.greenBackgroundColor;
    if (name === 'save') return theme.colors.blueBackgroundColor;
    if (name === 'backToPrevPage') return theme.colors.redBackgroundColor;
    if (name === 'delete') return theme.colors.redBackgroundColor;
    if (name === 'confirm') return theme.colors.greenBackgroundColor;
    return theme.colors.black;
  }};
  border: none;
  border-radius: 0.5em;
  padding: 0.7em 2em;
  margin-left:
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  box-shadow: 0 0.1875em 0.5em rgba(0, 0, 0, 0.3);
  :active {
    transform: translateY(0.25em);
    border: none;
    outline: none;
  }
  :focus {
    border: none;
    outline: none;
  }
`;
