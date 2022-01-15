import React from 'react';
import { TitleLeftTop } from 'components/atoms/TitleLeftTop/TitleLeftTop';
import { Button } from 'components/atoms/Button/Button';
import { SubtitleLeftTop } from 'components/atoms/SubtitleLeftTop/SubtitleLeftTop';
import { ChoosePanelSingleViewWrapper } from 'components/atoms/ChoosePanelSingleViewWrapper/ChoosePanelSingleViewWrapper';
import { Wrapper } from 'assets/styles/AdminAccountantViewPanel';
import image19 from 'assets/icons/image19.png';
import image18 from 'assets/icons/image18.png';
import { users } from 'mocks/data/users';

const AdminPanel = () => {
  const dane = users;
  return (
    <>
      <Wrapper>
        <TitleLeftTop>{dane[0].imie + ' ' + dane[0].nazwisko}</TitleLeftTop>
        <SubtitleLeftTop>Firma XYZ, ul. Wąsacza 1A/20002255</SubtitleLeftTop>

        <Button name="red" where="1">
          {' '}
          Wyloguj{' '}
        </Button>

        <ChoosePanelSingleViewWrapper as="form">
          <img src={image19} alt="people_logo" />
          <Button name="green" where="2">
            {' '}
            Użytkownicy{' '}
          </Button>

          <p>Modyfikuj dane użytkowników</p>
        </ChoosePanelSingleViewWrapper>
        <ChoosePanelSingleViewWrapper as="form">
          <img src={image18} alt="people_logo" />
          <Button name="green" where="2">
            {' '}
            Środki trwałe{' '}
          </Button>

          <p>Modyfikuj informacje o obiektach</p>
        </ChoosePanelSingleViewWrapper>
      </Wrapper>
    </>
  );
};
export default AdminPanel;
