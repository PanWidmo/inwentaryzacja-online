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

export const UserPanelList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const navigateToCreateUser = () => {
    navigate('/user-management/create');
  };

  const getData = async () => {
    setLoading(true);
    try {
      const result = await axios.get(requests.getUsers);

      setData(result.data);
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header title="Uzytkownicy" companyName="Compolexos" hasLogoutButton />
      <ContentWrapper>
        <Wrapper>
          {!loading && !error && data?.length ? (
            <>
              <Table dane={data} dataName="user" id="usersTable" />
              <Button name="green" text="Dodaj" onClick={navigateToCreateUser} />
            </>
          ) : (
            <>
              <LoadingOrError msg={error ? error : 'Loading...'} />
            </>
          )}
          <InnerWrapper></InnerWrapper>
        </Wrapper>
      </ContentWrapper>
      <Footer hasBackToPrevPageButton />
    </>
  );
};
