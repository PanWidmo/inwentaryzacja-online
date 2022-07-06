import React from 'react';

// import { TitleLeftTop } from 'components/atoms/TitleLeftTop/TitleLeftTop';
// import { SubtitleLeftTop } from 'components/atoms/SubtitleLeftTop/SubtitleLeftTop';
// import { ButtonZG } from 'components/atoms/ButtonZG/ButtonZG';
import { LabelAboveInput } from 'components/atoms/LabelAboveInput/LabelAboveInput';
import { Input } from 'components/atoms/Input/Input';

// import { useAuth } from 'hooks/useAuth';

import { Wrapper, InnerWrapper } from 'components/atoms/PanelStyles/PanelStyles';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/organisms/ContentWrapper/ContentWrapper';
import { Footer } from 'components/organisms/Footer/Footer';
import { ButtonAddFile } from 'components/molecules/Buttons/ButtonAddFile';

export const InventoryCreate = () => {
  // const { signOutUser } = useAuth();

  // const handleLogout = () => {
  //   signOutUser();
  // };
  return (
    <>
      <Header title="Nowa Inwentaryzacja" companyName="Compolexos" hasLogoutButton />
      <ContentWrapper>
        <Wrapper>
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
            <ButtonAddFile />
            <hr />
          </InnerWrapper>
        </Wrapper>
      </ContentWrapper>

      <Footer hasBackToPrevPageButton hasCreateInventoryButton />
    </>
  );
};
