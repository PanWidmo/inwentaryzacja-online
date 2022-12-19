import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { Button } from 'components/organisms/Button/Button';
import { useNavigate } from 'react-router-dom';
import unauthorizedIcon from 'assets/icons/unauthorized.png';
import { Wrapper } from 'views/auth/Unauthorized/Unauthorized.styles';

export const Unauthorized = () => {
  const navigate = useNavigate();

  const navigateToMainPage = () => {
    navigate('/');
  };

  return (
    <>
      <Header title="Błąd" />
      <ContentWrapper>
        <Wrapper>
          <img src={unauthorizedIcon} alt="Unauthorized icon" />
          <h2>Brak dostępu</h2>
          <p>Nie masz dostępu do tej strony.</p>
          <Button name="blue" text="Powrót" onClick={navigateToMainPage} />
        </Wrapper>
      </ContentWrapper>
    </>
  );
};
