import React from 'react';

import { Table } from 'components/atoms/Table/Table';
import { ButtonZG } from 'components/atoms/ButtonZG/ButtonZG';
import { Wrapper, InnerWrapper, StyledFooter } from 'assets/styles/TableComponents';
import { users } from 'mocks/data/users';
import { useAuth } from 'hooks/useAuth';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/organisms/ContentWrapper/ContentWrapper';
import { ButtonCreateUser } from 'components/molecules/Buttons/ButtonCreateUser';
import { Footer } from 'components/organisms/Footer/Footer';

export const UserPanelList = () => {
  const dane = users;
  const { signOutUser } = useAuth();

  const handleLogout = () => {
    signOutUser();
  };

  return (
    <>
      <Header title="Uzytkownicy" companyName="Compolexos" hasLogoutButton />
      <ContentWrapper>
        <Wrapper>
          <InnerWrapper>
            <Table dane={dane} id="usersTable" />
            <ButtonCreateUser />
          </InnerWrapper>
        </Wrapper>
      </ContentWrapper>
      <Footer hasBackToPrevPageButton />
    </>
  );
};
