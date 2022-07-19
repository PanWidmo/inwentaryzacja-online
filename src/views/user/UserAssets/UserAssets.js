import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'components/atoms/Table/Table';
import { Wrapper, InnerWrapper } from 'assets/styles/TableComponents';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/organisms/ContentWrapper/ContentWrapper';
import { Footer } from 'components/organisms/Footer/Footer';
import { Loading } from '../../../components/molecules/Loading/Loading';

export const UserAssets = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [dane, setDane] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios.get('https://localhost:5001/api/user/');

        setDane(result.data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setData(dane[0]?.assets);
  }, [dane]);

  return (
    <>
      <Header title="Uzytkownicy" companyName="Compolexos" hasLogoutButton />
      <ContentWrapper>
        <Wrapper>
          <InnerWrapper>
            {!loading ? (
              <>
                <Table dane={data} id="usersTable" />
              </>
            ) : (
              <Loading />
            )}
          </InnerWrapper>
        </Wrapper>
      </ContentWrapper>
      <Footer hasBackToPrevPageButton hasConfirmUserAssets />
    </>
  );
};
