import React from 'react';
import { TitleLeftTop } from 'components/atoms/TitleLeftTop/TitleLeftTop';
import { Button } from 'components/atoms/Button/Button';
import { SubtitleLeftTop } from 'components/atoms/SubtitleLeftTop/SubtitleLeftTop';
import { ChoosePanelSingleViewWrapper } from 'components/atoms/ChoosePanelSingleViewWrapper/ChoosePanelSingleViewWrapper';
import { Wrapper } from 'assets/styles/AdminAccountantViewPanel';
import image21 from 'assets/icons/image21.png';
import image22 from 'assets/icons/image22.png';
import image23 from 'assets/icons/image23.png';
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
          <img src={image23} alt="people_logo" />
          <Button name="green" where="2">
            {' '}
            Historia{' '}
          </Button>

          <p>Poprzednie inwentaryzacje</p>
        </ChoosePanelSingleViewWrapper>
        <ChoosePanelSingleViewWrapper as="form">
          <img src={image22} alt="people_logo" />
          <Button name="green" where="2">
            {' '}
            Aktualna inwentaryzacja{' '}
          </Button>

          <p>Aktualna inwentaryzacja</p>
        </ChoosePanelSingleViewWrapper>
        <ChoosePanelSingleViewWrapper as="form">
          <img src={image21} alt="people_logo" />
          <Button name="green" where="2">
            {' '}
            Nowa inwentaryzacja{' '}
          </Button>

          <p>Rozpocznij inwentaryzację</p>
        </ChoosePanelSingleViewWrapper>
      </Wrapper>
    </>
  );
};
export default AdminPanel;
