import React from 'react';
import axios from 'axios';
import { Wrapper, InnerWrapper } from 'components/atoms/PanelStyles/PanelStyles';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/organisms/ContentWrapper/ContentWrapper';
import { Footer } from 'components/organisms/Footer/Footer';
import { FormField } from 'components/molecules/FormField/FormField';
import { useFormik } from 'formik';
import { ErrorMessage } from 'components/molecules/ErrorMessage/ErrorMessage';
import { useNavigate } from 'react-router-dom';

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 2) {
    errors.name = 'Must be 2 characters or more';
  }

  if (!values.inventoryNumber) {
    errors.inventoryNumber = 'Required';
  } else if (values.inventoryNumber.length < 2) {
    errors.inventoryNumber = 'Must be 2 characters or more';
  }

  if (!values.serialNumber) {
    errors.serialNumber = 'Required';
  } else if (values.serialNumber.length < 2) {
    errors.serialNumber = 'Must be 2 characters or more';
  }

  if (!values.description) {
    errors.description = 'Required';
  } else if (values.description.length < 2) {
    errors.description = 'Must be 2 characters or more';
  }

  if (!values.userId) {
    errors.userId = 'Required';
  }

  if (!values.inventoryId) {
    errors.inventoryId = 'Required';
  }

  return errors;
};

export const FixedAssetCreate = () => {
  const navigate = useNavigate();

  const navigateToFixedAsset = () => {
    navigate('/fixed-asset-management');
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      inventoryNumber: '',
      serialNumber: '',
      description: '',
      userId: '',
      inventoryId: '',
    },
    validate,
    onSubmit: (values) => {
      try {
        axios.post('https://localhost:5001/api/asset', values);
        navigateToFixedAsset();
        alert('Srodek Trwaly dodany! :)');
      } catch (error) {
        console.error(error.message);
      }
    },
  });

  return (
    <>
      <Header title="Dodanie nowego Srodka Trwalego" companyName="Compolexos" hasLogoutButton />
      <ContentWrapper>
        <form id="fixedAssetCreateForm" onSubmit={formik.handleSubmit}>
          <FormField label="Nazwa" id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.name} />
          {formik.errors.name ? <ErrorMessage errorMsg={formik.errors.name} /> : null}

          <FormField
            label="Numer Inwentarzowy"
            id="inventoryNumber"
            name="inventoryNumber"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.inventoryNumber}
          />
          {formik.errors.inventoryNumber ? <ErrorMessage errorMsg={formik.errors.inventoryNumber} /> : null}

          <FormField
            label="Numer Seryjny"
            id="serialNumber"
            name="serialNumber"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.serialNumber}
          />
          {formik.errors.serialNumber ? <ErrorMessage errorMsg={formik.errors.serialNumber} /> : null}

          <FormField label="Opis" id="description" name="description" type="text" onChange={formik.handleChange} value={formik.values.description} />
          {formik.errors.description ? <ErrorMessage errorMsg={formik.errors.description} /> : null}

          <FormField label="Id Uzytkownika" id="userId" name="userId" type="text" onChange={formik.handleChange} value={formik.values.userId} />
          {formik.errors.userId ? <ErrorMessage errorMsg={formik.errors.userId} /> : null}

          <FormField
            label="Id Inwentaryzacji"
            id="inventoryId"
            name="inventoryId"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.inventoryId}
          />
          {formik.errors.inventoryId ? <ErrorMessage errorMsg={formik.errors.inventoryId} /> : null}
        </form>
      </ContentWrapper>
      <Footer hasBackToPrevPageButton hasCreateFixedAssetButton />
    </>
  );
};
