import { SingleViewWrapper } from 'components/atoms/SingleViewWrapper/SingleViewWrapper';
import usersIcon from 'assets/icons/users.png';
import fixedAssetsIcon from 'assets/icons/fixedAssets.png';
import issuesIcon from 'assets/icons/issues.png';
import inventoryIcon from 'assets/icons/inventory.png';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { Button } from 'components/organisms/Button/Button';
import { useNavigate } from 'react-router-dom';
import { requests } from 'api/requests';
import { Wrapper } from 'views/role-pages/AdminPanel/AdminPanel.styles';

export const AdminPanel = () => {
  const navigate = useNavigate();

  const navigateToUsers = () => {
    navigate(requests.userManagement);
  };

  const navigateToFixedAssets = () => {
    navigate(requests.fixedAssetManagement);
  };

  const navigateToIssues = () => {
    navigate(requests.issueManagement);
  };

  const navigateToUserFixedAssets = () => {
    navigate(requests.userFixedAsset);
  };

  return (
    <>
      <Header title="Panel administratora" hasLogoutButton />
      <ContentWrapper>
        <Wrapper>
          <SingleViewWrapper>
            <img src={usersIcon} alt="Three people portrait" />
            <Button name="green" text="Użytkownicy" onClick={navigateToUsers} />
            <p>Modyfikuj dane użytkowników</p>
          </SingleViewWrapper>

          <SingleViewWrapper>
            <img src={fixedAssetsIcon} alt="Computer, laptop and phone" />
            <Button name="green" text="Środki Trwałe" onClick={navigateToFixedAssets} />
            <p>Modyfikuj informacje o sprzęcie</p>
          </SingleViewWrapper>

          <SingleViewWrapper>
            <img src={issuesIcon} alt="Man with bubbles around his head" />
            <Button name="green" text="Zgłoszenia" onClick={navigateToIssues} />
            <p>Zgłoszone problemy przez użytkowników</p>
          </SingleViewWrapper>

          <SingleViewWrapper>
            <img src={inventoryIcon} alt="Inventory icon" />
            <Button name="green" text="Twoje środki trwałe" onClick={navigateToUserFixedAssets} />
            <p>Lista posiadanych przez Ciebie rzeczy</p>
          </SingleViewWrapper>
        </Wrapper>
      </ContentWrapper>
    </>
  );
};
