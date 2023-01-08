import { useState, useEffect } from 'react';
import axios from 'api/axios';
import { requests } from 'api/requests';
import { Table } from 'components/organisms/Table/Table';
import { Wrapper, InnerWrapper } from 'assets/styles/TableComponents';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { Footer } from 'components/organisms/Footer/Footer';
import { LoadingOrError } from 'components/molecules/LoadingOrError/LoadingOrError';

export const UserFixedAsset = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isActiveInventory, setIsActiveInventory] = useState(false);
  const [error, setError] = useState(null);
  const [dane, setDane] = useState([]);

  const checkInventoryActive = async () => {
    setLoading(true);
    try {
      const result = await axios.get(requests.singleInventory, {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
      });
      if (result.data.some((e) => e.isActive === true)) {
        setIsActiveInventory(true);
      }
    } catch (error) {
      console.error(error.message);

      setError(error.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    checkInventoryActive();
    // eslint-disable-next-line
  }, []);

  /*  useEffect(() => {
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
  }, [dane]);*/

  return (
    <>
      <Header title="Twoje środki trwałe" hasLogoutButton />
      <ContentWrapper>
        <Wrapper>
          <InnerWrapper>
            {!loading && !error ? (
              // <Table dane={data} dataName="fixed-asset" id="fixedAssetsTable" />
              <p>Tu powinny się pojawić assety usera</p>
            ) : (
              <LoadingOrError msg={error ? error : 'Ładowanie...'} />
            )}
          </InnerWrapper>
        </Wrapper>
      </ContentWrapper>
      {isActiveInventory === true ? <Footer hasBackToPrevPageButton hasConfirmUserAsset /> : <Footer hasBackToPrevPageButton />}
    </>
  );
};
