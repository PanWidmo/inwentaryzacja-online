import React from 'react';
import sentProtocol from 'assets/icons/sentProtocol.png';
import styled from 'styled-components';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { Button } from 'components/organisms/Button/Button';

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
  // https://stackoverflow.com/questions/54996850/close-current-browser-tab-on-button-click-using-reactjs
  const closeTab = () => {
    window.open('about:blank', '_self');
    window.close();
  };

  return (
    <ContentWrapper>
      <Wrapper>
        <img src={sentProtocol} alt="protocol sent icon" />
        <p>Protokół wysłany, dziękujemy.</p>
        <Button name="green" text="Zakoncz" type="submit" onClick={closeTab} />
      </Wrapper>
    </ContentWrapper>
  );
};
