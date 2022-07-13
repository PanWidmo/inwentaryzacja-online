import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.red};
  font-weight: bold;
  margin-top: 5px;
  text-decoration: underline;
`;
