import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16rem;

  @media ${({ theme }) => theme.breakpoints.mobileOnly} {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media ${({ theme }) => theme.breakpoints.tabletOnly} {
    gap: 1rem;
  }
`;
