import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Table } from 'components/atoms/Table/Table';
import { Wrapper, InnerWrapper } from 'assets/styles/TableComponents';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/organisms/ContentWrapper/ContentWrapper';
import { Footer } from 'components/organisms/Footer/Footer';
import { Button } from 'components/molecules/Button/Button';

export const InventoryPanel = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const navigateToCreateInventory = () => {
    navigate('/inventory-management/create');
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        //TODO: CHANGE URL!
        const result = await axios.get('https://localhost:5001/api/user/onlyall');

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
      <Header title="Inwentaryzacje" companyName="Compolexos" hasLogoutButton />
      <ContentWrapper>
        <Wrapper>
          <InnerWrapper>
            {!loading ? (
              <>
                <Table dane={data} id="inventoryTable" />
                <Button name="navigateTo" text="Dodaj" onClick={navigateToCreateInventory} />
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
