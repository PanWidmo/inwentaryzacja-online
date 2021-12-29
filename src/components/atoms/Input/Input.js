import styled from 'styled-components';

export const Input = styled.input`
  box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.4);
  padding: 0.2em;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
