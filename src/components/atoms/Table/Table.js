import styled from 'styled-components';

export const Table = styled.table`
  color: ${({ theme }) => theme.colors.black};
  border-collapse: collapse;
  width: 100%;
  td,
  th {
    border: 0.0625em solid ${({ theme }) => theme.colors.tabBorderGray};
    padding: 0.5em;
  }
  tr:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.tabGray};
  }
  tr:hover {
    background-color: ${({ theme }) => theme.colors.tabHoverGray};
  }
  th {
    padding-top: 0.75em;
    padding-bottom: 0.75em;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
