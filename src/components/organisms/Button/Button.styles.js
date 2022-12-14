import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({ theme, name }) => {
    if (name === 'blue') return theme.colors.blue;
    if (name === 'red') return theme.colors.red;
    if (name === 'green') return theme.colors.green;
    if (name === 'darkBlue') return theme.colors.darkBlue;
    return theme.colors.black;
  }};
  border: none;
  border-radius: 0.4375em;
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
