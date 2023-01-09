import { useNavigate } from 'react-router-dom';
import { Button } from 'components/organisms/Button/Button';
import { Wrapper, TitleWithSubtitles, Title, ButtonsSection, Subtitle } from 'components/organisms/Header/Header.styles';
import { requests } from 'api/requests';

export const Header = ({ title, companyName = 'Compolexos', inventoryNumber, hasLogoutButton }) => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate(requests.loginPage);
  };

  const navigateToIssuePage = () => {
    navigate(requests.issuePage);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
    localStorage.removeItem('email');
    navigateToLogin();
  };

  return (
    <Wrapper>
      <TitleWithSubtitles>
        <Title>{title}</Title>
        <Subtitle>{companyName}</Subtitle>
        <Subtitle>{inventoryNumber}</Subtitle>
      </TitleWithSubtitles>

      <ButtonsSection>
        <Button name="darkBlue" text="Pomoc" onClick={navigateToIssuePage} />
        {hasLogoutButton && <Button name="red" text="Wyloguj" onClick={handleLogout} />}
      </ButtonsSection>
    </Wrapper>
  );
};
