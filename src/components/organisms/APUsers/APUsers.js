import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100vh;
  border: 1px solid red;
`;

const Button = styled.button`
  margin: 15px 0;
  padding: 7px 20px;
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 5px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 40px;
  right: 40px;
  cursor: pointer;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
`;

const APUsers = () => {
  return (
    <Wrapper>
      <Button>Wyloguj</Button>
    </Wrapper>
  );
};

export default APUsers;
