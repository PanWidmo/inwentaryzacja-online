import { SingleViewWrapper } from 'components/atoms/SingleViewWrapper/SingleViewWrapper';
import userIcon from 'assets/icons/user.png';
import adminIcon from 'assets/icons/admin.png';
import accountantIcon from 'assets/icons/accountant.png';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { Button } from 'components/organisms/Button/Button';
import { useNavigate } from 'react-router-dom';

export const UserRoleSelect = () => {
  const navigate = useNavigate();

  const navigateToUserPanel = () => {
    // DO ZMIANY ADRES PO ZROBIENIU ODPOWIEDNIEGO KOMPONENTU!
    navigate('/user/summary');
  };

  const navigateToAdminPanel = () => {
    navigate('/admin-panel');
  };

  const navigateToAccountantPanel = () => {
    navigate('/accountant-panel');
  };

  return (
    <>
      <Header title="Wybierz swoja role" companyName="Compolexos" hasLogoutButton />
      <ContentWrapper>
        <SingleViewWrapper as="form">
          <img src={userIcon} alt="people_logo" />
          <Button name="green" text="Uzytkownik" onClick={navigateToUserPanel} />
          <p>Panel uzytkownika</p>
        </SingleViewWrapper>

        <SingleViewWrapper as="form">
          <img src={adminIcon} alt="people_logo" />
          <Button name="green" text="Admin" onClick={navigateToAdminPanel} />
          <p>Panel administratora</p>
        </SingleViewWrapper>

        <SingleViewWrapper as="form">
          <img src={accountantIcon} alt="people_logo" />
          <Button name="green" text="Ksiegowy" onClick={navigateToAccountantPanel} />
          <p>Panel ksiegowego</p>
        </SingleViewWrapper>
      </ContentWrapper>
    </>
  );
};
