import styled from 'styled-components';

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.formLabelBlue};
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 0 0 3px 0;
`;
