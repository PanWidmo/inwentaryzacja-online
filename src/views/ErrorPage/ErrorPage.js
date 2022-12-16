import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { Button } from 'components/organisms/Button/Button';
import { useNavigate } from 'react-router-dom';
import errorIcon from 'assets/icons/error.png';

export const ErrorPage = () => {
  const navigate = useNavigate();

  const navigateToMainPage = () => {
    navigate('/');
  };

  // TODO: komponent do poprawienia

  return (
    <>
      <Header title="404" companyName="Compolexos" />
      <ContentWrapper>
        <img src={errorIcon} alt="Error red icon" />
        <h1>Błąd</h1>
        <p>Ups, coś poszło nie tak.</p>
        <Button name="blue" text="Powrót" onClick={navigateToMainPage} />
      </ContentWrapper>
    </>
  );
};
