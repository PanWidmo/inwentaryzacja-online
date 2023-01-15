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
  border-radius: 0.5em;
  padding: 0.5em 1.25em;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  max-width: 18rem;
  height: fit-content;
  box-shadow: 0 0.2em 0.5em rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  :is(:hover, :active, :focus) {
    opacity: 0.9;
    transform: translateY(0.25rem);
  }

  :focus:not(:focus-visible) {
    outline: none;
  }
`;
