import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  padding: 0.5rem;

  @media ${({ theme }) => theme.breakpoints.desktopOnly} {
    padding: 2rem 3.5rem;
  }
`;
