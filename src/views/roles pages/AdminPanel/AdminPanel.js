import React from 'react';
import { ChoosePanelSingleViewWrapper } from 'components/atoms/ChoosePanelSingleViewWrapper/ChoosePanelSingleViewWrapper';
import usersIcon from 'assets/icons/users.png';
import fixedAssetsIcon from 'assets/icons/fixedAssets.png';
import downloadIcon from 'assets/icons/download.png';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/organisms/ContentWrapper/ContentWrapper';
import { Button } from 'components/molecules/Button/Button';
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
      <Header title="Imie i nazwisko zalogowanego admina" companyName="Compolexos" hasLogoutButton />
      <ContentWrapper>
        <ChoosePanelSingleViewWrapper as="form">
          <img src={usersIcon} alt="people_logo" />
          <Button name="navigateTo" text="Uzytkownicy" onClick={navigateToUsers} />
          <p>Modyfikuj dane użytkowników</p>
        </ChoosePanelSingleViewWrapper>

        <ChoosePanelSingleViewWrapper as="form">
          <img src={fixedAssetsIcon} alt="people_logo" />
          <Button name="navigateTo" text="Srodki Trwale" onClick={navigateToFixedAssets} />
          <p>Modyfikuj informacje o obiektach</p>
        </ChoosePanelSingleViewWrapper>

        <ChoosePanelSingleViewWrapper as="form">
          <img src={downloadIcon} alt="people_logo" />
          <Button name="downloadData" text="Pobierz" onClick={() => alert('Functionality in progress... :)')} />
          <p>Generuj plik z danymi wyjściowymi</p>
        </ChoosePanelSingleViewWrapper>
      </ContentWrapper>
    </>
  );
};
