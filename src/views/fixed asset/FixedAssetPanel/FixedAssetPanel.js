import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'components/atoms/Table/Table';
import { Wrapper, InnerWrapper } from 'assets/styles/TableComponents';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/organisms/ContentWrapper/ContentWrapper';
import { Footer } from 'components/organisms/Footer/Footer';
import { Button } from 'components/molecules/Button/Button';
import { useNavigate } from 'react-router-dom';

export const FixedAssetPanelList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const navigateToCreateFixedAsset = () => {
    navigate('/fixed-asset-management/create');
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios.get('https://localhost:5001/api/asset/onlyall ');

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
      <Header title="Srodki Trwale" companyName="Compolexos" hasLogoutButton />
      <ContentWrapper>
        <Wrapper>
          <InnerWrapper>
            {!loading ? (
              <>
                <Table dane={data} id="fixedAssetsTable" />
                <Button name="navigateTo" text="Dodaj" onClick={navigateToCreateFixedAsset} />
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
