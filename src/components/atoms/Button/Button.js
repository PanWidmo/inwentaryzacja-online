import styled from 'styled-components';

export const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.loginButtonBlue};
  min-width: 7em;
  margin: 3em 0 0 0;
  padding: 0.5em;
  border-radius: 0.25em;
  border: none;
`;
