import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginProblemLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.black};
  border: none;
  background: none;
  text-decoration: none;
`;
