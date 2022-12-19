import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem;

  @media ${({ theme }) => theme.breakpoints.desktopOnly} {
    margin: 2rem 3.5rem;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  gap: 2.5rem;
`;

export const RightSide = styled.div``;
