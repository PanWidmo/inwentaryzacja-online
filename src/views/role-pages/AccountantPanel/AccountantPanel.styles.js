import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;

  @media ${({ theme }) => theme.breakpoints.tabletOnly} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.breakpoints.mobileOnly} {
    grid-template-columns: 1fr;
  }
`;
