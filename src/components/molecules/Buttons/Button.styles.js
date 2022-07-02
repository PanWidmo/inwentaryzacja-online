import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({ theme, name }) => {
    if (name === 'logout') return theme.colors.redBackgroundColor;
    if (name === 'login') return theme.colors.blueBackgroundColor;
    if (name === 'sendEmail') return theme.colors.blueBackgroundColor;
    if (name === 'backToLogin') return theme.colors.blueBackgroundColor;
    if (name === 'confirmResetPassword') return theme.colors.blueBackgroundColor;
    if (name === 'closeTab') return theme.colors.greenBackgroundColor;
    if (name === 'viewUsers') return theme.colors.greenBackgroundColor;
    if (name === 'viewFixedAssets') return theme.colors.greenBackgroundColor;
    if (name === 'downloadData') return theme.colors.greenBackgroundColor;
    if (name === 'createUser') return theme.colors.greenBackgroundColor;
    if (name === 'createFixedAsset') return theme.colors.greenBackgroundColor;
    if (name === 'createInventory') return theme.colors.greenBackgroundColor;
    if (name === 'saveEditedUser') return theme.colors.greenBackgroundColor;
    if (name === 'saveEditedFixedAsset') return theme.colors.greenBackgroundColor;
    if (name === 'backToPrevPage') return theme.colors.redBackgroundColor;
    if (name === 'deleteUser') return theme.colors.redBackgroundColor;
    if (name === 'deleteFixedAsset') return theme.colors.redBackgroundColor;
    if (name === 'addFile') return theme.colors.blueBackgroundColor;
    return theme.colors.black;
  }};
  border: none;
  border-radius: 7px;
  padding: 0.42375em 1.25em;
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
