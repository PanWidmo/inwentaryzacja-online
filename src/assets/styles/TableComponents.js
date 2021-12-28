import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 1.5625em 3.125em;
  color: ${({ theme }) => theme.colors.buttonBlue};
  h4 {
    color: ${({ theme }) => theme.colors.hGray};
  }
`;

export const InnerWrapper = styled.div`
  width: 80%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  button {
    position: relative;
  }
`;

export const StyledFooter = styled.div`
  position: relative;
  width: 100%;
  height: 10em;
`;
