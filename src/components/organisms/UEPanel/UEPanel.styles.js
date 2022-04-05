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
    margin-top: 20px;
    margin-bottom: 20px;
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
    margin-top: 50px;
    margin-bottom: 50px;
  }
  form {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20%;
  }
  input {
    width: 250px;
  }
`;

export const TableWrapper = styled.div`
  width: 60%;
`;
