import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 1.5625em 3.125em;
  color: ${({ theme }) => theme.colors.buttonBlue};
  font-size: ${({ theme }) => theme.fontSize.l};
  h4 {
    color: ${({ theme }) => theme.colors.hGray};
  }

  @media ${({ theme }) => theme.breakpoints.notDesktop} {
    padding: 0;
  }
`;

export const InnerWrapper = styled.div`
  width: fit-content;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  button {
    position: relative;
    margin-top: 0.5em;
  }
  @media ${({ theme }) => theme.breakpoints.notDesktop} {
    width: 100%;
    overflow: auto;
    padding: 1rem;
  }
`;

export const StyledFooter = styled.div`
  position: relative;
  width: 100%;
  height: 7em;
`;
