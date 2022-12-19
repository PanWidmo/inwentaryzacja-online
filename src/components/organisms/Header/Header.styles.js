import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem;

  @media ${({ theme }) => theme.breakpoints.desktopOnly} {
    margin: 2rem 3.5rem;
  }
`;

export const TitleWithSubtitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSize.xxxl};

  @media ${({ theme }) => theme.breakpoints.mobileOnly} {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-top: 0.75rem;
`;

export const ButtonsSection = styled.div`
  display: flex;
  gap: 4rem;

  @media ${({ theme }) => theme.breakpoints.mobileOnly} {
    gap: 1rem;
    flex-direction: column;
  }
`;
