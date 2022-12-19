import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  img {
    max-width: 200px;
    max-height: 200px;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
