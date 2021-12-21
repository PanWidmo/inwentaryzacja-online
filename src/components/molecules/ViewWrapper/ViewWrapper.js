import styled from 'styled-components';

export const ViewWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.viewWrapper};
  width: 20vw;
  border-radius: 10px;
  box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.7);
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
