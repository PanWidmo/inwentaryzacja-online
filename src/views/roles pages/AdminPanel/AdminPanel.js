import React from 'react';
import { TitleLeftTop } from 'components/atoms/TitleLeftTop/TitleLeftTop';
import { ButtonZG } from 'components/atoms/ButtonZG/ButtonZG';
import { SubtitleLeftTop } from 'components/atoms/SubtitleLeftTop/SubtitleLeftTop';
import { ChoosePanelSingleViewWrapper } from 'components/atoms/ChoosePanelSingleViewWrapper/ChoosePanelSingleViewWrapper';
import usersIcon from 'assets/icons/users.png';
import fixedAssetsIcon from 'assets/icons/fixedAssets.png';
import downloadIcon from 'assets/icons/download.png';
import { users } from 'mocks/data/users';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/organisms/ContentWrapper/ContentWrapper';
import { ButtonViewUsers } from 'components/molecules/Buttons/ButtonViewUsers';
import { ButtonViewFixedAssets } from 'components/molecules/Buttons/ButtonViewFixedAssets';
import { ButtonDownloadData } from 'components/molecules/Buttons/ButtonDownloadData';

export const AdminPanel = () => {
  const dane = users;
  return (
    <>
      <Header title="Imie i nazwisko zalogowanego admina" companyName="Compolexos" hasLogoutButton />
      <ContentWrapper>
        <ChoosePanelSingleViewWrapper as="form">
          <img src={usersIcon} alt="people_logo" />
          <ButtonViewUsers />
          <p>Modyfikuj dane użytkowników</p>
        </ChoosePanelSingleViewWrapper>

        <ChoosePanelSingleViewWrapper as="form">
          <img src={fixedAssetsIcon} alt="people_logo" />
          <ButtonViewFixedAssets />
          <p>Modyfikuj informacje o obiektach</p>
        </ChoosePanelSingleViewWrapper>

        <ChoosePanelSingleViewWrapper as="form">
          <img src={downloadIcon} alt="people_logo" />
          <ButtonDownloadData />
          <p>Generuj plik z danymi wyjściowymi</p>
        </ChoosePanelSingleViewWrapper>
      </ContentWrapper>
    </>
  );
};
