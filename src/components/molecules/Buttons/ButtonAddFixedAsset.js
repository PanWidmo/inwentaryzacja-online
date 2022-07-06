import React, { useEffect, useState } from 'react';
import { StyledButton } from 'components/molecules/Buttons/Button.styles';
// import { useAssets } from 'hooks/useAssets';

export const ButtonAddFixedAsset = ({ text = 'Dodaj' }) => {
  // const [assets, setAssets] = useState([]);
  // const { getAssets } = useAssets();

  // useEffect(() => {
  //   (async () => {
  //     const assets = await getAssets;
  //     setAssets(assets);
  //   })();
  // }, [getAssets]);
  // const handleAddFixedAsset = () => {
  //   const newAsset = {
  //     name: '',
  //     inventoryNumber: '',
  //     serialNumber: '',
  //     description: '',
  //     hasInventoried: '',
  //     userID: '',
  //     inventoryId: '',
  //   };
  //   setAssets([newAsset, ...assets]);
  // };
  return (
    <StyledButton
      name="addFixedAsset"
      // onClick={() => {
      //   handleAddFixedAsset();
      // }}
    >
      {text}
    </StyledButton>
  );
};
