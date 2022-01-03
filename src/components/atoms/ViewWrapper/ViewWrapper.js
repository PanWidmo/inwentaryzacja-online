import styled from 'styled-components';

export const ViewWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.viewWrapperGray};
  border-radius: 0.5em;
  box-shadow: 0 0.1875em 0.5em rgba(0, 0, 0, 0.3);
  padding: 2.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    position: relative;
  }
`;
