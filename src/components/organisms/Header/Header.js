import { ButtonLogout } from 'components/molecules/Buttons/ButtonLogout';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  margin: 2rem 3.5rem;
`;

const TitleWithButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  h1 {
    color: ${({ theme }) => theme.colors.blue};
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;
const ButtonsSection = styled.div``;

const Subtitles = styled.div`
  font-size: ${({ theme }) => theme.fontSize.l};
  p {
    margin-top: 0.75rem;
  }
`;
export const Header = ({ title, companyName, inventoryNumber, hasLogoutButton }) => {
  return (
    <Wrapper>
      <TitleWithButtons>
        <Title>
          <h1>{title}</h1>
        </Title>

        {hasLogoutButton && (
          <ButtonsSection>
            <ButtonLogout />
          </ButtonsSection>
        )}
      </TitleWithButtons>
      <Subtitles>
        <p>{companyName}</p>
        <p>{inventoryNumber}</p>
      </Subtitles>
    </Wrapper>
  );
};