import { useState, useEffect } from 'react';
import axios from 'api/axios';
import { requests } from 'api/requests';
import { useNavigate } from 'react-router-dom';
import { Wrapper, InnerWrapper } from 'assets/styles/TableComponents';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { Table } from 'components/organisms/Table/Table';
import { Button } from 'components/organisms/Button/Button';
import { LoadingOrError } from 'components/molecules/LoadingOrError/LoadingOrError';
import { Footer } from 'components/organisms/Footer/Footer';

export const FixedAssetList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const navigateToCreateFixedAsset = () => {
    navigate(requests.fixedAssetCreate);
  };

  const getData = async () => {
    setLoading(true);
    try {
      const result = await axios.get(requests.singleFixedAsset, {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
      });
      const cutData = result.data.filter((x) => {
        delete x.inventoryId;
        //delete x.id;
        delete x.userId;
        return x;
      });

      setData(cutData);
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
    setLoading(false);
  };

  const checkIfAdminLogged = async () => {
    const permission = await JSON.parse(localStorage.getItem('roles'));
    if (permission == 3) {
      setIsAdmin(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    checkIfAdminLogged();
  }, [isAdmin]);

  return (
    <>
      <Header title="Środki Trwałe" hasLogoutButton />
      <ContentWrapper>
        <Wrapper>
          <InnerWrapper>
            {!loading && !error && data?.length ? (
              <>
                <Table dane={data} dataName="fixed-asset" id="fixedAssetsTable" />
                <Button name="blue" text="Dodaj" onClick={navigateToCreateFixedAsset} />
              </>
            ) : (
              <LoadingOrError msg={error ? error : 'Ładowanie...'} />
            )}
          </InnerWrapper>
        </Wrapper>
      </ContentWrapper>
      {isAdmin ? <Footer hasBackToAdminPanelButton /> : <Footer hasBackToAccountantPanelButton />}
    </>
  );
};
