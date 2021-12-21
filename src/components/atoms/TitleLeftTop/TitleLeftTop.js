import styled from 'styled-components';

export const TitleLeftTop = styled.h1`
  color: ${({ theme }) => theme.colors.titleLeftTopBlueButton};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: normal;
  position: absolute;
  left: 0;
  top: 0;
`;
