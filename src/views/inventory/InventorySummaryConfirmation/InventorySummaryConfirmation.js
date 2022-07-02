import React from 'react';
import sentProtocol from 'assets/icons/sentProtocol.png';
import { ButtonZG } from 'components/atoms/ButtonZG/ButtonZG';
import styled from 'styled-components';
import { ContentWrapper } from 'components/organisms/ContentWrapper/ContentWrapper';
import { ButtonCloseTab } from 'components/molecules/Buttons/ButtonCloseTab';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5em;

  p {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    color: ${({ theme }) => theme.colors.titleBlue};
  }
`;

export const InventorySummaryConfirmation = () => {
  return (
    <ContentWrapper>
      <Wrapper>
        <img src={sentProtocol} alt="protocol sent icon" />
        <p>Protokół wysłany, dziękujemy.</p>
        <ButtonCloseTab />
      </Wrapper>
    </ContentWrapper>
  );
};
