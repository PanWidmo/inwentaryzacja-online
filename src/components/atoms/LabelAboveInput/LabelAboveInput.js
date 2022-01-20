import styled from 'styled-components';

export const LabelAboveInput = styled.label`
  color: ${({ theme, name }) => {
    if (name === 'login') return theme.colors.labelBlue;
    if (name === 'password') return theme.colors.labelBlue;
    if(name === 'data') return theme.colors.labelBlue;
  }};
  font-size: ${({ theme, name }) => {
    if (name === 'login') return theme.fontSize.l;
    if (name === 'password') return theme.fontSize.l;
    if (name === 'data') return theme.fontSize.m;
  }};
  margin: 0 0 0.25em 0;
`;
