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
  padding: 1rem 2rem;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.white};
`;
