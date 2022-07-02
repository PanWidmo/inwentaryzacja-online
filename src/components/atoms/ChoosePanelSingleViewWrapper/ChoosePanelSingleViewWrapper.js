import styled from 'styled-components';

export const ChoosePanelSingleViewWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.tabHoverGray};
  border-radius: 0.5em;
  box-shadow: 0 0.1875em 0.5em rgba(0, 0, 0, 0.3);
  padding: 2em 5em;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
  min-height: 50vh;

  img {
    width: 8rem;
    margin: 2em auto;
  }
`;
