import React from 'react';
import { TitleLeftTop } from 'components/atoms/TitleLeftTop/TitleLeftTop';
import { SubtitleLeftTop } from 'components/atoms/SubtitleLeftTop/SubtitleLeftTop';
import { Button } from 'components/atoms/Button/Button';
import FormField from 'components/molecules/FormField/FormField';
import { Wrapper } from 'assets/styles/CreateNewInventory';

const CreateNewInventory = () => {
  return (
    <>
      <div>
        <TitleLeftTop>Nowa inwentaryzacja</TitleLeftTop>
        <SubtitleLeftTop>Firma XYZ, ul. Wąsacza 1A/20002255</SubtitleLeftTop>
        <Button name="red" where="1">
          Wyloguj
        </Button>
      </div>
      <Wrapper>
        <div className="formArea">
          <FormField label="Data rozpoczęcia inwentaryzacji: " id="inventoryDate" name="data" type="text" />
          <FormField label="Przewodniczący komisji: " id="inventoryDate" name="data" type="text" />
          <FormField label="Członkowie komisji: " id="inventoryDate" name="data" type="text" />
        </div>

        <div>
          <Button name="blue" where="2">
            Dodaj plik
          </Button>
        </div>
      </Wrapper>
      <Button name="red" where="5">
        Cofnij
      </Button>
      <Button name="blue" where="4">
        Zapisz
      </Button>
    </>
  );
};

export default CreateNewInventory;
