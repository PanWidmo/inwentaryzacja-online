import styled from 'styled-components';

export const ViewWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.viewWrapperGray};
  border-radius: 0.5em;
  box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.7);
  padding: 2.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
