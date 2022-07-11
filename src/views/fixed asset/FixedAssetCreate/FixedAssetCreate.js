import React, { useRef } from 'react';

import axios from 'axios';

import { Wrapper, InnerWrapper } from 'components/atoms/PanelStyles/PanelStyles';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/organisms/ContentWrapper/ContentWrapper';
import { Footer } from 'components/organisms/Footer/Footer';
import { FormField } from 'components/molecules/FormField/FormField';

export const FixedAssetCreate = () => {
  const nameRef = useRef();
  const inventoryNumberRef = useRef();
  const serialNumberRef = useRef();
  const descriptionRef = useRef();
  const userIdRef = useRef();
  const inventoryIdRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fixedAssetData = {
      name: nameRef.current.value,
      inventoryNumber: inventoryNumberRef.current.value,
      serialNumber: serialNumberRef.current.value,
      description: descriptionRef.current.value,
      userId: userIdRef.current.value,
      inventoryId: userIdRef.current.value,
    };

    try {
      axios.post('https://localhost:5001/api/asset', fixedAssetData);
      e.target.reset();
      alert('Srodek trwaly dodany! :)');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Header title="Dodanie nowego Srodka Trwalego" companyName="Compolexos" hasLogoutButton />
      <ContentWrapper>
        <form id="fixedAssetCreateForm" onSubmit={handleSubmit}>
          <FormField label="Nazwa" id="name" name="name" type="text" ref={nameRef} />

          <FormField label="Number inwentarzowy" id="inventoryNumber" name="inventoryNumber" type="text" ref={inventoryNumberRef} />

          <FormField label="Numer seryjny" id="serialNumber" name="serialNumber" type="text" ref={serialNumberRef} />

          <FormField label="Opis" id="description" name="description" type="text" ref={descriptionRef} />

          <FormField label="User Id" id="userId" name="userId" type="text" ref={userIdRef} />

          <FormField label="Inventory Id" id="inventoryId" name="inventoryId" type="text" ref={inventoryIdRef} />
        </form>
      </ContentWrapper>
      <Footer hasBackToPrevPageButton hasCreateFixedAssetButton />
    </>
  );
};
