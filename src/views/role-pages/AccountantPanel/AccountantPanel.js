import { SingleViewWrapper } from 'components/atoms/SingleViewWrapper/SingleViewWrapper';
import inventoryHistory from 'assets/icons/inventoryHistory.png';
import inventoryCreate from 'assets/icons/inventoryCreate.png';
import inventoryCurrent from 'assets/icons/inventoryCurrent.png';
import inventoryIcon from 'assets/icons/inventory.png';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { Button } from 'components/organisms/Button/Button';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from 'views/role-pages/AccountantPanel/AccountantPanel.styles';
import { requests } from 'api/requests';

export const AccountantPanel = () => {
  const navigate = useNavigate();

  const navigateToInventoryHistory = () => {
    navigate(requests.inventoryManagement);
  };

  const navigateToCreateInventory = () => {
    navigate(requests.inventoryCreate);
  };

  const navigateToUserFixedAssets = () => {
    navigate(requests.userFixedAsset);
  };

  return (
    <>
      <Header title="Panel księgowego" hasLogoutButton />
      <ContentWrapper>
        <Wrapper>
          <SingleViewWrapper>
            <img src={inventoryHistory} alt="Three document boxes" />
            <Button name="green" text="Historia" onClick={navigateToInventoryHistory} />
            <p>Wgląd w poprzednie inwentaryzacje</p>
          </SingleViewWrapper>

          <SingleViewWrapper>
            <img src={inventoryCreate} alt="Three files" />
            <Button name="green" text="Obecna inwentaryzacja" onClick={() => alert('Funkcjonalność w budowie...')} />
            <p>Akualnie prowadzona inwentaryzacja</p>
          </SingleViewWrapper>

          <SingleViewWrapper>
            <img src={inventoryCurrent} alt="Document with plus sign on the front" />
            <Button name="green" text="Nowa inwentaryzacja" onClick={navigateToCreateInventory} />
            <p>Rozpocznij nową inwentaryzacje</p>
          </SingleViewWrapper>

          <SingleViewWrapper>
            <img src={inventoryIcon} alt="Inventory icon" />
            <Button name="green" text="Twoje środki trwałe" onClick={navigateToUserFixedAssets} />
            <p>Lista posiadanych przez Ciebie rzeczy</p>
          </SingleViewWrapper>
        </Wrapper>
      </ContentWrapper>
    </>
  );
};
