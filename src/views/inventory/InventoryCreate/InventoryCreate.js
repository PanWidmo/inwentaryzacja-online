import React from 'react';

import { LabelAboveInput } from 'components/atoms/LabelAboveInput/LabelAboveInput';
import { Input } from 'components/atoms/Input/Input';

import { Wrapper, InnerWrapper } from 'components/atoms/PanelStyles/PanelStyles';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/organisms/ContentWrapper/ContentWrapper';
import { Footer } from 'components/organisms/Footer/Footer';
import { Button } from 'components/molecules/Button/Button';

export const InventoryCreate = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('dziala button do tworzenia inwentaryzacji');
  };

  return (
    <>
      <Header title="Nowa Inwentaryzacja" companyName="Compolexos" hasLogoutButton />
      <ContentWrapper>
        <Wrapper>
          <InnerWrapper>
            <hr />
            <form id="inventoryCreateForm" onSubmit={handleSubmit}>
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
            <Button name="addFile" text="Dodaj plik" onClick={() => alert('dziala dodaj plik button')} />
            <hr />
          </InnerWrapper>
        </Wrapper>
      </ContentWrapper>

      <Footer hasBackToPrevPageButton hasCreateInventoryButton />
    </>
  );
};
