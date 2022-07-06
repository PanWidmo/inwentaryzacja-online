import React from 'react';

// import { TitleLeftTop } from 'components/atoms/TitleLeftTop/TitleLeftTop';
// import { SubtitleLeftTop } from 'components/atoms/SubtitleLeftTop/SubtitleLeftTop';
// import { ButtonZG } from 'components/atoms/ButtonZG/ButtonZG';
import { LabelAboveInput } from 'components/atoms/LabelAboveInput/LabelAboveInput';
import { Input } from 'components/atoms/Input/Input';

//import { useAuth } from 'hooks/useAuth';

import { Wrapper, InnerWrapper } from 'components/atoms/PanelStyles/PanelStyles';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/organisms/ContentWrapper/ContentWrapper';
import { Footer } from 'components/organisms/Footer/Footer';

export const FixedAssetCreate = () => {
  //const { signOutUser } = useAuth();

  // const handleLogout = () => {
  //   signOutUser();
  // };
  return (
    <>
      <Header title="Dodanie nowego Srodka Trwalego" companyName="Compolexos" hasLogoutButton />
      <ContentWrapper>
        <Wrapper>
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
        </Wrapper>
      </ContentWrapper>
      <Footer hasBackToPrevPageButton hasCreateFixedAssetButton />
    </>
  );
};
