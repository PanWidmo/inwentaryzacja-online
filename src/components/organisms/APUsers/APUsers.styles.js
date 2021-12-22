import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 1.5625em 3.125em;
  color: ${({ theme }) => theme.colors.blue};
`;
