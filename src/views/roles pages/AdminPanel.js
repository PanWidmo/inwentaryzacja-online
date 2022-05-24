import React from 'react';
import { TitleLeftTop } from 'components/atoms/TitleLeftTop/TitleLeftTop';
import { Button } from 'components/atoms/Button/Button';
import { SubtitleLeftTop } from 'components/atoms/SubtitleLeftTop/SubtitleLeftTop';
import { ChoosePanelSingleViewWrapper } from 'components/atoms/ChoosePanelSingleViewWrapper/ChoosePanelSingleViewWrapper';
import usersIcon from 'assets/icons/users.png';
import fixedAssetsIcon from 'assets/icons/fixedAssets.png';
import downloadIcon from 'assets/icons/download.png';
import { users } from 'mocks/data/users';

export const AdminPanel = () => {
  const dane = users;
  return (
    <>
      <TitleLeftTop>{dane[0].imie + ' ' + dane[0].nazwisko}</TitleLeftTop>
      <SubtitleLeftTop>Firma XYZ, ul. Wąsacza 1A/20002255</SubtitleLeftTop>

      <Button name="red" where="1">
        {' '}
        Wyloguj{' '}
      </Button>

      <ChoosePanelSingleViewWrapper as="form">
        <img src={usersIcon} alt="people_logo" />
        <Button name="green" where="2">
          Użytkownicy
        </Button>

        <p>Modyfikuj dane użytkowników</p>
      </ChoosePanelSingleViewWrapper>
      <ChoosePanelSingleViewWrapper as="form">
        <img src={fixedAssetsIcon} alt="people_logo" />
        <Button name="green" where="2">
          Środki trwałe
        </Button>

        <p>Modyfikuj informacje o obiektach</p>
      </ChoosePanelSingleViewWrapper>
      <ChoosePanelSingleViewWrapper as="form">
        <img src={downloadIcon} alt="people_logo" />
        <Button name="green" where="2">
          Pobierz dane
        </Button>

        <p>Generuj plik z danymi wyjściowymi</p>
      </ChoosePanelSingleViewWrapper>
    </>
  );
};
