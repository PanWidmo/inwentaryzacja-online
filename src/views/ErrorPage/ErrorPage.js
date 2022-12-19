import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { Button } from 'components/organisms/Button/Button';
import { useNavigate } from 'react-router-dom';
import errorIcon from 'assets/icons/error.png';
import { Wrapper } from 'views/ErrorPage/ErrorPage.styles';

export const ErrorPage = () => {
  const navigate = useNavigate();

  const navigateToMainPage = () => {
    navigate('/');
  };

  return (
    <>
      <Header title="404" />
      <ContentWrapper>
        <Wrapper>
          <img src={errorIcon} alt="Error red icon" />
          <h2>Błąd</h2>
          <p>Ups, coś poszło nie tak.</p>
          <Button name="blue" text="Powrót" onClick={navigateToMainPage} />
        </Wrapper>
      </ContentWrapper>
    </>
  );
};
