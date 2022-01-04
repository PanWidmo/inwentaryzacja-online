import styled from 'styled-components';

export const SubtitleLeftTop = styled.h4`
  color: ${({ theme }) => theme.colors.tabGray};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: normal;
  position: absolute;
  left: 0.5em;
  top: 2em;
  margin: 1em;
`;
