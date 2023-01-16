import { useState, useEffect } from 'react';
import axios from 'api/axios';
import { requests } from 'api/requests';
import { Table } from 'components/organisms/Table/Table';
import { Wrapper, InnerWrapper } from 'assets/styles/TableComponents';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { Footer } from 'components/organisms/Footer/Footer';
import { LoadingOrError } from 'components/molecules/LoadingOrError/LoadingOrError';
import { NoFixedAssets } from 'components/molecules/NoFixedAssets/NoFixedAssets';

export const UserFixedAsset = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isActiveInventory, setIsActiveInventory] = useState(false);
  const [error, setError] = useState(null);

  const getUserFixedAssets = async () => {
    setLoading(true);
    try {
      const result = await axios.get(requests.singleUser, {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
      });

      const emailUser = JSON.parse(localStorage.getItem('email'));
      const userAssets = result.data.find((e) => e.email === emailUser);

      const cutData = userAssets.assets.filter((x) => {
        delete x.inventoryId;
        //delete x.id;
        delete x.userId;
        return x;
      });

      setData(cutData);
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  };

  const checkInventoryActive = async () => {
    setLoading(true);
    try {
      const result = await axios.get(requests.singleInventory, {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
      });

      // tu ma byc true
      if (result.data.some((e) => e.isActive === false)) {
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

  useEffect(() => {
    if (isActiveInventory === true) {
      getUserFixedAssets();
    }
  }, [isActiveInventory]);

  return (
    <>
      <Header title="Twoje środki trwałe" hasLogoutButton />
      <ContentWrapper>
        <Wrapper>
          <InnerWrapper as="form">
            {!loading && !error && data.length > 0 ? (
              <Table dane={data} dataName="fixed-asset" id="fixedAssetsTable" isEditEnable={false} />
            ) : !loading && !error && data.length === 0 ? (
              <NoFixedAssets />
            ) : (
              <LoadingOrError msg={error ? error : 'Ładowanie...'} />
            )}
          </InnerWrapper>
        </Wrapper>
      </ContentWrapper>
      {isActiveInventory === true && data.length > 0 ? <Footer hasBackToPrevPageButton hasConfirmUserAsset /> : <Footer hasBackToPrevPageButton />}
    </>
  );
};
