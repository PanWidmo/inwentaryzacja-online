import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.red};
  font-weight: bold;
  padding: 1rem 0;
  text-decoration: underline;
`;
