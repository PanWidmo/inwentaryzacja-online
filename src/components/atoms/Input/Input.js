import styled from 'styled-components';

export const Input = styled.input`
  box-shadow: 0 0.1875em 0.5em rgba(0, 0, 0, 0.3);
  padding: 0.2em;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
