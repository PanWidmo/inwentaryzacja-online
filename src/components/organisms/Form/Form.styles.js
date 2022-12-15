import styled from 'styled-components';

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 3rem;

  @media ${({ theme }) => theme.breakpoints.notDesktop} {
    grid-template-columns: auto auto;
  }

  @media ${({ theme }) => theme.breakpoints.mobileOnly} {
    grid-template-columns: auto;
  }
`;
