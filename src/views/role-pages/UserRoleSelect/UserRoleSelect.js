import { SingleViewWrapper } from 'components/atoms/SingleViewWrapper/SingleViewWrapper';
import userIcon from 'assets/icons/user.png';
import adminIcon from 'assets/icons/admin.png';
import accountantIcon from 'assets/icons/accountant.png';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { Button } from 'components/organisms/Button/Button';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from 'views/role-pages/UserRoleSelect/UserRoleSelect.styles';
import { requests } from 'api/requests';

export const UserRoleSelect = () => {
  const navigate = useNavigate();

  const navigateToUserFixedAssets = () => {
    navigate(requests.userFixedAsset);
  };

  const navigateToAdminPanel = () => {
    navigate(requests.adminPanel);
  };

  const navigateToAccountantPanel = () => {
    navigate(requests.accountantPanel);
  };

  return (
    <>
      <Header title="Wybierz swoją rolę" hasLogoutButton />
      <ContentWrapper>
        <Wrapper>
          <SingleViewWrapper>
            <img src={userIcon} alt="Man in suit portrait" />
            <Button name="green" text="Pracownik" onClick={navigateToUserFixedAssets} />
            <p>Panel pracownika</p>
          </SingleViewWrapper>

          <SingleViewWrapper>
            <img src={adminIcon} alt="Man portrait with gear on the front" />
            <Button name="green" text="Administrator" onClick={navigateToAdminPanel} />
            <p>Panel administratora</p>
          </SingleViewWrapper>

          <SingleViewWrapper>
            <img src={accountantIcon} alt="Woman portrait with calculator and chart on the front" />
            <Button name="green" text="Księgowy" onClick={navigateToAccountantPanel} />
            <p>Panel księgowego</p>
          </SingleViewWrapper>
        </Wrapper>
      </ContentWrapper>
    </>
  );
};
