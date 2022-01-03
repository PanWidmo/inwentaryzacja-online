import styled from 'styled-components';

export const TitleLeftTop = styled.h1`
  color: ${({ theme }) => theme.colors.buttonBlue};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: normal;
  position: absolute;
  left: 0;
  top: 0;
  margin: 1em;
`;
