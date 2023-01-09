import sentProtocol from 'assets/icons/sentProtocol.png';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { Button } from 'components/organisms/Button/Button';
import { Header } from 'components/organisms/Header/Header';
import { Wrapper } from 'views/user/UserFixedAssetConfirm/UserFixedAssetConfirm.styles';
import { useNavigate } from 'react-router-dom';
import { requests } from 'api/requests';

export const UserFixedAssetConfirm = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate(requests.loginPage);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
    localStorage.removeItem('email');
    navigateToLogin();
  };

  return (
    <>
      <Header title="Inwentaryzacja zakończona" hasLogoutButton />
      <ContentWrapper>
        <Wrapper>
          <img src={sentProtocol} alt="Protocol sent icon" />
          <h2>Protokół wysłany!</h2>
          <p>Dziękujemy</p>
          <Button name="blue" text="Zakoncz" onClick={handleLogout} />
        </Wrapper>
      </ContentWrapper>
    </>
  );
};
