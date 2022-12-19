import { useNavigate } from 'react-router-dom';
import { Button } from 'components/organisms/Button/Button';
import { Wrapper, TitleWithSubtitles, Title, ButtonsSection, Subtitle } from 'components/organisms/Header/Header.styles';

export const Header = ({ title, companyName, inventoryNumber, hasLogoutButton }) => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  const navigateToIssuePage = () => {
    navigate('/issue');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
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
