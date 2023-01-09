import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  img {
    width: 25%;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
