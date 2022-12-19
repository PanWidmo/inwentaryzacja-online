import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'components/organisms/Table/Table';
import { Wrapper, InnerWrapper } from 'assets/styles/TableComponents';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { Footer } from 'components/organisms/Footer/Footer';
import { LoadingOrError } from 'components/molecules/LoadingOrError/LoadingOrError';

export const UserFixedAsset = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dane, setDane] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios.get('https://localhost:5001/api/user/', {
          headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
        });

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
      <Header title="Twoje środki trwałe" hasLogoutButton />
      <ContentWrapper>
        <Wrapper>
          <InnerWrapper>
            {!loading ? (
              <>
                <Table dane={data} dataName="fixed-asset" id="usersTable" />
              </>
            ) : (
              <LoadingOrError />
            )}
          </InnerWrapper>
        </Wrapper>
      </ContentWrapper>
      <Footer hasBackToPrevPageButton hasConfirmUserAsset />
    </>
  );
};
