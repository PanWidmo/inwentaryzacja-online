import styled from 'styled-components';

export const ChoosePanelSingleViewWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.tabHoverGray};
  border-radius: 0.5rem;
  box-shadow: 0 0.1875rem 0.5rem rgba(0, 0, 0, 0.3);
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
  min-height: 50vh;
  max-width: 25rem;

  img {
    width: 8rem;
    margin: 2rem auto;
  }

  p {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
