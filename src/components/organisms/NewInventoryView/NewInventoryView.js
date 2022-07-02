import React from 'react';

import { TitleLeftTop } from 'components/atoms/TitleLeftTop/TitleLeftTop';
import { SubtitleLeftTop } from 'components/atoms/SubtitleLeftTop/SubtitleLeftTop';
import { ButtonZG } from 'components/atoms/ButtonZG/ButtonZG';
import { LabelAboveInput } from 'components/atoms/LabelAboveInput/LabelAboveInput';
import { Input } from 'components/atoms/Input/Input';
import { Wrapper, InnerWrapper, TableWrapper } from 'components/atoms/PanelStyles/PanelStyles';
import { Table } from 'components/atoms/Table/Table';

import { assets } from 'mocks/data/assets';

import { useAuth } from 'hooks/useAuth';

export const NewInventoryView = () => {
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
        <ButtonZG name="red" where="1" onClick={handleLogout}>
          Wyloguj
        </ButtonZG>
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
          <ButtonZG name="red">Usuń plik</ButtonZG>
        </TableWrapper>
      </InnerWrapper>

      <ButtonZG name="red" where="3">
        Cofnij
      </ButtonZG>
      <ButtonZG name="blue" where="5">
        Zapisz
      </ButtonZG>
      <ButtonZG name="green" where="4">
        Zatwierdź
      </ButtonZG>
    </Wrapper>
  );
};
