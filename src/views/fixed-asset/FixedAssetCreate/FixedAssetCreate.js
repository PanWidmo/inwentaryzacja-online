import axios from 'api/axios';
import { requests } from 'api/requests';
import { useNavigate } from 'react-router-dom';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { useFormik } from 'formik';
import { FormField } from 'components/molecules/FormField/FormField';
import { Footer } from 'components/organisms/Footer/Footer';

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
        axios.post(requests.singleFixedAsset, values, {
          headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
        });
        alert('Srodek Trwaly dodany! :)');
        navigateToFixedAsset();
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
          <FormField
            label="Nazwa"
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            error={formik.touched.name && formik.errors.name ? formik.errors.name : null}
          />

          <FormField
            label="Numer Inwentarzowy"
            id="inventoryNumber"
            name="inventoryNumber"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.inventoryNumber}
            onBlur={formik.handleBlur}
            error={formik.touched.inventoryNumber && formik.errors.inventoryNumber ? formik.errors.inventoryNumber : null}
          />

          <FormField
            label="Numer Seryjny"
            id="serialNumber"
            name="serialNumber"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.serialNumber}
            onBlur={formik.handleBlur}
            error={formik.touched.serialNumber && formik.errors.serialNumber ? formik.errors.serialNumber : null}
          />

          <FormField
            label="Opis"
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description}
            onBlur={formik.handleBlur}
            error={formik.touched.description && formik.errors.description ? formik.errors.description : null}
          />

          <FormField
            label="Id Uzytkownika"
            id="userId"
            name="userId"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.userId}
            onBlur={formik.handleBlur}
            error={formik.touched.userId && formik.errors.userId ? formik.errors.userId : null}
          />

          <FormField
            label="Id Inwentaryzacji"
            id="inventoryId"
            name="inventoryId"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.inventoryId}
            onBlur={formik.handleBlur}
            error={formik.touched.inventoryId && formik.errors.inventoryId ? formik.errors.inventoryId : null}
          />
        </form>
      </ContentWrapper>
      <Footer hasBackToPrevPageButton hasCreateFixedAssetButton />
    </>
  );
};
