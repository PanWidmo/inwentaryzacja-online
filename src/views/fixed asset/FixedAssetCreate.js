import React from 'react';

import { TitleLeftTop } from 'components/atoms/TitleLeftTop/TitleLeftTop';
import { SubtitleLeftTop } from 'components/atoms/SubtitleLeftTop/SubtitleLeftTop';
import { Button } from 'components/atoms/Button/Button';
import { LabelAboveInput } from 'components/atoms/LabelAboveInput/LabelAboveInput';
import { Input } from 'components/atoms/Input/Input';

import { useAuth } from 'hooks/useAuth';

import { Wrapper, InnerWrapper } from '../../components/atoms/PanelStyles/PanelStyles';

export const FixedAssetCreate = () => {
  const { signOutUser } = useAuth();

  const handleLogout = () => {
    signOutUser();
  };
  return (
    <Wrapper>
      <div>
        <TitleLeftTop>Dodaj nowy środek trwały</TitleLeftTop>
        <SubtitleLeftTop>Firma XYZ, ul. Wąsacza 1A/20002255</SubtitleLeftTop>
        <Button name="red" where="1" onClick={handleLogout}>
          Wyloguj
        </Button>
      </div>

      <InnerWrapper>
        <hr />
        <form>
          <LabelAboveInput>
            NAZWASPRZĘTU<Input></Input>
          </LabelAboveInput>

          <LabelAboveInput>
            NUMER INWENTARZOWY<Input></Input>
          </LabelAboveInput>

          <LabelAboveInput>
            NUMER SERYJNY<Input></Input>
          </LabelAboveInput>
        </form>
        <hr />
        <form>
          <LabelAboveInput>
            OSOBA PRZYPISANA<Input></Input>
          </LabelAboveInput>

          <LabelAboveInput>
            STAN<Input></Input>
          </LabelAboveInput>
        </form>
        <hr />
      </InnerWrapper>

      <Button name="red" where="3">
        Cofnij
      </Button>
      <Button name="blue" where="5">
        Zapisz
      </Button>
      <Button name="green" where="4">
        Zatwierdź
      </Button>
    </Wrapper>
  );
};
