import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14rem;

  @media ${({ theme }) => theme.breakpoints.notDesktop} {
    gap: 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.mobileOnly} {
    flex-direction: column;
  }
`;
