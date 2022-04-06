import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 1.5625em 3.125em;
  div {
    display: flex;
    h1 {
      position: relative;
    }
    h4 {
      top: 3em;
      left: 2.5em;
    }
  }
  hr {
    color: ${({ theme }) => theme.colors.tabGray};
    width: 90%;
    margin-top: 1.25em;
    margin-bottom: 1.25em;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    position: relative;
  }

  hr {
    color: ${({ theme }) => theme.colors.tabGray};
    width: 90%;
    margin-top: 3.125em;
    margin-bottom: 3.125em,;
  }
  form {
    width: 90%;
    margin-left: 7%;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    gap: 15%;
    input {
      width: 15em;
    }
    button {
      top: 25em;

  }
`;

export const TableWrapper = styled.div`
  width: 60%;
`;
