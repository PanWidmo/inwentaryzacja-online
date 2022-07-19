import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Button } from 'components/molecules/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';

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
  hasDeleteInventoryButton,
  hasCreateUserButton,
  hasCreateFixedAssetButton,
  hasCreateInventoryButton,
  hasSaveEditedUserButton,
  hasSaveEditedFixedAssetButton,
  hasSaveEditedInventoryButton,
  hasAbortInventoryButton,
  hasDownloadInventoryButton,
  hasConfirmUserAssets,
  hasSaveUserAssets,
}) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const navigateToPrevPage = () => {
    navigate(-1);
  };

  const deleteUser = () => {
    try {
      axios.delete(`https://localhost:5001/api/user/${id}`);
      navigate('/user-management');
      alert('Usunieto uzytkownika! :)');
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteFixedAsset = () => {
    try {
      axios.delete(`https://localhost:5001/api/asset/${id}`);
      navigate('/fixed-asset-management');
      alert('Usunieto srodek trwaly! :)');
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteInventory = () => {
    try {
      axios.delete(`https://localhost:5001/api/inventory/${id}`);
      navigate('/inventory-management');
      alert('Usunieto inwentaryzacje! :)');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Wrapper>
      <LeftSide>
        {hasBackToPrevPageButton && <Button name="backToPrevPage" text="Cofnij" onClick={navigateToPrevPage} />}
        {hasDeleteUserButton && <Button name="delete" text="Usun" type="submit" onClick={deleteUser} />}
        {hasDeleteFixedAssetButton && <Button name="delete" text="Usun" onClick={deleteFixedAsset} />}
        {hasDeleteInventoryButton && <Button name="delete" text="Usun" onClick={deleteInventory} />}
      </LeftSide>
      <RightSide>
        {hasCreateUserButton && <Button name="create" text="Zatwierdź" type="submit" form="userCreateForm" />}
        {hasCreateFixedAssetButton && <Button name="create" text="Zatwierdź" type="submit" form="fixedAssetCreateForm" />}
        {hasCreateInventoryButton && <Button name="create" text="Zatwierdź" type="submit" form="inventoryCreateForm" />}
        {hasSaveEditedUserButton && <Button name="save" text="Zapisz" type="submit" form="userEditForm" />}
        {hasSaveEditedFixedAssetButton && <Button name="save" text="Zapisz" type="submit" form="fixedAssetEditForm" />}
        {hasSaveEditedInventoryButton && <Button name="save" text="Zapisz" type="submit" form="inventoryEditForm" />}
        {hasAbortInventoryButton && <Button name="delete" text="Przerwij" type="submit" />}
        {hasDownloadInventoryButton && <Button name="download" text="Pobierz" />}
        {hasConfirmUserAssets && <Button name="confirm" text="Zatwierdź" />}
        {hasSaveUserAssets && <Button name="save" text="Zapisz" />}
      </RightSide>
    </Wrapper>
  );
};
