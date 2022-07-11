import React from 'react';
import styled from 'styled-components';

import { Button } from 'components/molecules/Button/Button';
import { useNavigate } from 'react-router-dom';

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
  hasAbortInventoryButton,
  hasDownloadInventoryButton,
}) => {
  const navigate = useNavigate();

  const navigateToPrevPage = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <LeftSide>
        {hasBackToPrevPageButton && <Button name="backToPrevPage" text="Cofnij" onClick={navigateToPrevPage} />}
        {hasDeleteUserButton && <Button name="delete" text="Usun" type="submit" form="deleteUserForm" />}
        {hasDeleteFixedAssetButton && <Button name="delete" text="Usun" form="deleteFixedAssetForm" />}
      </LeftSide>
      <RightSide>
        {hasCreateUserButton && <Button name="create" text="Zatwierdz" type="submit" form="userCreateForm" />}
        {hasCreateFixedAssetButton && <Button name="create" text="Zatwierdz" type="submit" form="fixedAssetCreateForm" />}
        {hasCreateInventoryButton && <Button name="create" text="Zatwierdz" type="submit" form="inventoryCreateForm" />}
        {hasSaveEditedUserButton && <Button name="save" text="Zapisz" type="submit" form="userEditForm" />}
        {hasSaveEditedFixedAssetButton && <Button name="save" text="Zapisz" type="submit" form="fixedAssetEditForm" />}
        {hasAbortInventoryButton && <Button name="delete" text="Przerwij" type="submit" />}
        {hasDownloadInventoryButton && <Button name="download" text="Pobierz" />}
      </RightSide>
    </Wrapper>
  );
};
