import { SingleViewWrapper } from 'components/atoms/SingleViewWrapper/SingleViewWrapper';
import usersIcon from 'assets/icons/users.png';
import fixedAssetsIcon from 'assets/icons/fixedAssets.png';
import downloadIcon from 'assets/icons/download.png';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { Button } from 'components/organisms/Button/Button';
import { useNavigate } from 'react-router-dom';

export const AdminPanel = () => {
  const navigate = useNavigate();

  const navigateToUsers = () => {
    navigate('/user-management');
  };

  const navigateToFixedAssets = () => {
    navigate('/fixed-asset-management');
  };

  return (
    <>
      <Header title="Panel admina" companyName="Compolexos" hasLogoutButton />
      <ContentWrapper>
        <SingleViewWrapper as="form">
          <img src={usersIcon} alt="people_logo" />
          <Button name="green" text="Uzytkownicy" onClick={navigateToUsers} />
          <p>Modyfikuj dane użytkowników</p>
        </SingleViewWrapper>

        <SingleViewWrapper as="form">
          <img src={fixedAssetsIcon} alt="people_logo" />
          <Button name="green" text="Srodki Trwale" onClick={navigateToFixedAssets} />
          <p>Modyfikuj informacje o obiektach</p>
        </SingleViewWrapper>

        <SingleViewWrapper as="form">
          <img src={downloadIcon} alt="people_logo" />
          <Button name="green" text="Pobierz" onClick={() => alert('Functionality in progress... :)')} />
          <p>Generuj plik z danymi wyjściowymi</p>
        </SingleViewWrapper>
      </ContentWrapper>
    </>
  );
};
