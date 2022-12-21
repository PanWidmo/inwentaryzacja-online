import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;
  font-size: ${({ theme }) => theme.fontSize.xl};

  select {
    box-shadow: 0 0.1875em 0.5em rgba(0, 0, 0, 0.3);
    font-size: inherit;
    border: none;
  }
`;
