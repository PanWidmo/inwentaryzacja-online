import { ButtonBackToPrevPage } from 'components/molecules/Buttons/ButtonBackToPrevPage';
import React from 'react';
import styled from 'styled-components';
import { ButtonDeleteUser } from 'components/molecules/Buttons/ButtonDeleteUser';
import { ButtonDeleteFixedAsset } from 'components/molecules/Buttons/ButtonDeleteFixedAsset';
import { ButtonCreateUser } from 'components/molecules/Buttons/ButtonCreateUser';
import { ButtonCreateFixedAsset } from 'components/molecules/Buttons/ButtonCreateFixedAsset';
import { ButtonSaveEditedUser } from 'components/molecules/Buttons/ButtonSaveEditedUser';
import { ButtonCreateInventory } from 'components/molecules/Buttons/ButtonCreateInventory';

const Wrapper = styled.footer`
  margin: 2rem 3.5rem;
  display: flex;
  justify-content: space-between;
`;

const LeftSide = styled.div`
  display: flex;
  gap: 2.5rem;
`;
const RightSide = styled.div``;

export const Footer = ({
  hasBackToPrevPageButton,
  hasDeleteUserButton,
  hasDeleteFixedAssetButton,
  hasCreateUserButton,
  hasCreateFixedAssetButton,
  hasCreateInventoryButton,
  hasSaveEditedUserButton,
  hasSaveEditedFixedAssetButton,
  hasSaveInventoryButton,
  hasDownloadInventoryButton,
  hasAbortInventoryButton,
}) => {
  return (
    <Wrapper>
      <LeftSide>
        {hasBackToPrevPageButton && <ButtonBackToPrevPage />}
        {hasDeleteUserButton && <ButtonDeleteUser />}
        {hasDeleteFixedAssetButton && <ButtonDeleteFixedAsset />}
      </LeftSide>
      <RightSide>
        {hasCreateUserButton && <ButtonCreateUser />}
        {hasCreateFixedAssetButton && <ButtonCreateFixedAsset />}
        {hasCreateInventoryButton && <ButtonCreateInventory />}
        {hasSaveEditedUserButton && <ButtonSaveEditedUser />}
        {hasSaveEditedFixedAssetButton && <ButtonSaveEditedUser />}
      </RightSide>
    </Wrapper>
  );
};
