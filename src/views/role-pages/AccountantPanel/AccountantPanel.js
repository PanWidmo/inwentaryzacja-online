import { SingleViewWrapper } from 'components/atoms/SingleViewWrapper/SingleViewWrapper';
import inventoryHistory from 'assets/icons/inventoryHistory.png';
import inventoryCreate from 'assets/icons/inventoryCreate.png';
import inventoryCurrent from 'assets/icons/inventoryCurrent.png';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { Button } from 'components/organisms/Button/Button';
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
      <Header title="Panel ksiegowego" hasLogoutButton />
      <ContentWrapper>
        <SingleViewWrapper as="form">
          <img src={inventoryHistory} alt="people_logo" />
          <Button name="green" text="Historia" onClick={navigateToInventoryHistory} />
          <p>Wgląd w poprzednie inwentaryzacje</p>
        </SingleViewWrapper>

        <SingleViewWrapper as="form">
          <img src={inventoryCreate} alt="people_logo" />
          <Button name="green" text="Obecna inwentaryzacja" onClick={() => alert('Functionality in progress... :)')} />
          <p>Akualnie przeprowadzana inwentaryzacja</p>
        </SingleViewWrapper>

        <SingleViewWrapper as="form">
          <img src={inventoryCurrent} alt="people_logo" />
          <Button name="green" text="Nowa inwentaryzacja" onClick={navigateToCreateInventory} />
          <p>Rozpocznij nową inwentaryzacje</p>
        </SingleViewWrapper>
      </ContentWrapper>
    </>
  );
};
