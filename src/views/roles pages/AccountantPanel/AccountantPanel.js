import React from 'react';
import { ChoosePanelSingleViewWrapper } from 'components/atoms/ChoosePanelSingleViewWrapper/ChoosePanelSingleViewWrapper';
import inventoryHistory from 'assets/icons/inventoryHistory.png';
import inventoryCreate from 'assets/icons/inventoryCreate.png';
import inventoryCurrent from 'assets/icons/inventoryCurrent.png';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/organisms/ContentWrapper/ContentWrapper';
import { Button } from 'components/molecules/Button/Button';
import { useNavigate } from 'react-router-dom';

export const AccountantPanel = () => {
  const navigate = useNavigate();

  const navigateToInventoryHistory = () => {
    navigate('/inventory-management');
  };

  const navigateToCreateInventory = () => {
    navigate('/inventory-management/create');
  };

  return (
    <>
      <Header title="Panel ksiegowego" companyName="Compolexos" hasLogoutButton />
      <ContentWrapper>
        <ChoosePanelSingleViewWrapper as="form">
          <img src={inventoryHistory} alt="people_logo" />
          <Button name="navigateTo" text="Historia" onClick={navigateToInventoryHistory} />
          <p>Wgląd w poprzednie inwentaryzacje</p>
        </ChoosePanelSingleViewWrapper>

        <ChoosePanelSingleViewWrapper as="form">
          <img src={inventoryCreate} alt="people_logo" />
          <Button name="navigateTo" text="Obecna inwentaryzacja" onClick={() => alert('Functionality in progress... :)')} />
          <p>Akualnie przeprowadzana inwentaryzacja</p>
        </ChoosePanelSingleViewWrapper>

        <ChoosePanelSingleViewWrapper as="form">
          <img src={inventoryCurrent} alt="people_logo" />
          <Button name="downloadData" text="Nowa inwentaryzacja" onClick={navigateToCreateInventory} />
          <p>Rozpocznij nową inwentaryzacje</p>
        </ChoosePanelSingleViewWrapper>
      </ContentWrapper>
    </>
  );
};
