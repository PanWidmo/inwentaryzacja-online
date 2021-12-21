import styled from 'styled-components';

export const SubmitButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.submitBlue};
  width: 90px;
  margin: 15px 0;
  padding: 6px;
  border-radius: 5px;
  border: none;
`;
