import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const dane = users;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios.get('https://localhost:5001/api/user');

        setData(result.data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header title="Uzytkownicy" companyName="Compolexos" hasLogoutButton />
      <ContentWrapper>
        <Wrapper>
          <InnerWrapper>
            {!loading ? (
              <>
                {/* <Table dane={data} id="usersTable" /> */}
                <Table dane={dane} id="usersTable" />
                <ButtonCreateUser />
              </>
            ) : (
              <p>Loading...</p>
            )}
          </InnerWrapper>
        </Wrapper>
      </ContentWrapper>
      <Footer hasBackToPrevPageButton />
    </>
  );
};
