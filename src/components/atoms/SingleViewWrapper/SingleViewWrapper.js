import styled from 'styled-components';

export const SingleViewWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.tabHoverGray};
  border-radius: 0.5rem;
  box-shadow: 0 0.1875rem 0.5rem rgba(0, 0, 0, 0.3);
  padding: 1rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 50vh;
  min-width: 20rem;

  @media ${({ theme }) => theme.breakpoints.tabletOnly} {
    min-width: unset;
  }

  img {
    width: 8rem;
    height: 8rem;
  }

  p {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.l};
    max-width: 17rem;
  }
`;
