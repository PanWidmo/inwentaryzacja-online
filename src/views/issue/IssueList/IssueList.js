import { useState, useEffect } from 'react';
import axios from 'api/axios';
import { requests } from 'api/requests';
import { Wrapper, InnerWrapper } from 'assets/styles/TableComponents';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { Table } from 'components/organisms/Table/Table';
import { LoadingOrError } from 'components/molecules/LoadingOrError/LoadingOrError';
import { Footer } from 'components/organisms/Footer/Footer';

export const IssueList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    setLoading(true);
    try {
      const result = await axios.get(requests.getIssues, {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
      });

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
      <Header title="Zgłoszenia" hasLogoutButton />
      <ContentWrapper>
        <Wrapper>
          <InnerWrapper>
            {!loading && !error && data?.length ? (
              <>
                <Table dane={data} dataName="issue" id="issuesTable" />
              </>
            ) : (
              <>
                <LoadingOrError msg={error ? error : 'Ładowanie...'} />
              </>
            )}
          </InnerWrapper>
        </Wrapper>
      </ContentWrapper>
      <Footer hasBackToAdminPanelButton />
    </>
  );
};
