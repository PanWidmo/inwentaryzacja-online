import React from 'react';

import { Table } from 'components/atoms/Table/Table';
import { ButtonZG } from 'components/atoms/ButtonZG/ButtonZG';
import { Wrapper, InnerWrapper, StyledFooter } from 'assets/styles/TableComponents';
import { assets } from 'mocks/data/assets';
import { useAuth } from 'hooks/useAuth';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/organisms/ContentWrapper/ContentWrapper';
import { Footer } from 'components/organisms/Footer/Footer';
import { ButtonCreateFixedAsset } from 'components/molecules/Buttons/ButtonCreateFixedAsset';

export const FixedAssetPanelList = () => {
  const dane = assets;
  const { signOutUser } = useAuth();

  const handleLogout = () => {
    signOutUser();
  };

  return (
    <>
      <Header title="Srodki Trwale" companyName="Compolexos" hasLogoutButton />
      <ContentWrapper>
        <Wrapper>
          <InnerWrapper>
            <Table dane={dane} />

            <ButtonCreateFixedAsset />
          </InnerWrapper>
        </Wrapper>
      </ContentWrapper>
      <Footer hasBackToPrevPageButton />
    </>
  );
};
