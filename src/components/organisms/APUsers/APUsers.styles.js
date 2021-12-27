import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 1.5625em 3.125em;
  color: ${({ theme }) => theme.colors.buttonBlue};
`;

export const InnerWrapper = styled.div`
  width: 80%;
  height: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledFooter = styled.div`
  position: relative;
  width: 100%;
  height: 10em;
`;
