import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { Button } from 'components/organisms/Button/Button';
import { useNavigate } from 'react-router-dom';
import unauthorizedIcon from 'assets/icons/unauthorized.png';

export const Unauthorized = () => {
  const navigate = useNavigate();

  const navigateToMainPage = () => {
    navigate('/');
  };

  // TODO: komponent do poprawienia

  return (
    <>
      <Header title="Błąd" companyName="Compolexos" />
      <ContentWrapper>
        <img src={unauthorizedIcon} alt="Unauthorized icon" />
        <h1>Brak dostępu</h1>
        <p>Nie masz dostępu do tej strony.</p>
        <Button name="blue" text="Powrót" onClick={navigateToMainPage} />
      </ContentWrapper>
    </>
  );
};
