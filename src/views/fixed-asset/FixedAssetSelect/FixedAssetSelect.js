import { SingleViewWrapper } from 'components/atoms/SingleViewWrapper/SingleViewWrapper';
import fixedAssetsIcon from 'assets/icons/fixedAssets.png';
import inventoryIcon from 'assets/icons/inventory.png';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { Button } from 'components/organisms/Button/Button';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from 'views/fixed-asset/FixedAssetSelect/FixedAssetSelect.styles';
import { requests } from 'api/requests';
import { Footer } from 'components/organisms/Footer/Footer';

export const FixedAssetSelect = () => {
  const navigate = useNavigate();

  const navigateToFixedAssets = () => {
    navigate(requests.fixedAssetManagement);
  };

  const navigateToUserFixedAssets = () => {
    navigate(requests.userFixedAsset);
  };

  return (
    <>
      <Header title="Wybierz środki trwałe" hasLogoutButton />
      <ContentWrapper>
        <Wrapper>
          <SingleViewWrapper>
            <img src={fixedAssetsIcon} alt="Computer, laptop and phone" />
            <Button name="green" text="Środki trwałe firmy" onClick={navigateToFixedAssets} />
            <p>Lista środków trwałych firmy</p>
          </SingleViewWrapper>

          <SingleViewWrapper>
            <img src={inventoryIcon} alt="Inventory icon" />
            <Button name="green" text="Twoje środki trwałe" onClick={navigateToUserFixedAssets} />
            <p>Lista posiadanych przez Ciebie rzeczy</p>
          </SingleViewWrapper>
        </Wrapper>
      </ContentWrapper>
      <Footer hasBackToPrevPageButton />
    </>
  );
};
