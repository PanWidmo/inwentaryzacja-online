import React from 'react';

import { TitleLeftTop } from 'components/atoms/TitleLeftTop/TitleLeftTop';
import { SubtitleLeftTop } from 'components/atoms/SubtitleLeftTop/SubtitleLeftTop';
import { Button } from 'components/atoms/Button/Button';
import { LabelAboveInput } from 'components/atoms/LabelAboveInput/LabelAboveInput';
import { Input } from 'components/atoms/Input/Input';
import { Wrapper, InnerWrapper, TableWrapper } from 'components/atoms/PanelStyles/PanelStyles';
import Table from 'components/atoms/Table/Table';

import { assets } from 'mocks/data/assets';

import { useAuth } from 'hooks/useAuth';

const NewInventoryView = () => {
  const dane = assets;
  const { signOutUser } = useAuth();

  const handleLogout = () => {
    signOutUser();
  };
  return (
    <Wrapper>
      <div>
        <TitleLeftTop>Nowa Inventaryzacja</TitleLeftTop>
        <SubtitleLeftTop>Firma XYZ, ul. Wąsacza 1A/20002255</SubtitleLeftTop>
        <Button name="red" where="1" onClick={handleLogout}>
          Wyloguj
        </Button>
      </div>

      <InnerWrapper>
        <hr />
        <form>
          <LabelAboveInput>
            DATA INWENTARYZACJI<Input></Input>
          </LabelAboveInput>

          <LabelAboveInput>
            PRZEWODNICZĄCY KOMISJI<Input></Input>
          </LabelAboveInput>

          <LabelAboveInput>
            POZOSTALI CZŁONKOWIE<Input></Input>
          </LabelAboveInput>
        </form>
        <hr />
        <TableWrapper>
          <Table dane={dane} />
          <Button name="red">Usuń plik</Button>
        </TableWrapper>
      </InnerWrapper>

      <Button name="red" where="3">
        Cofnij
      </Button>
      <Button name="blue" where="4">
        Zapisz
      </Button>
    </Wrapper>
  );
};

export default NewInventoryView;
