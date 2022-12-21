import { useState, useEffect } from 'react';
import axios from 'api/axios';
import { requests } from 'api/requests';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { FormField } from 'components/molecules/FormField/FormField';
import { useFormik } from 'formik';
import { LoadingOrError } from 'components/molecules/LoadingOrError/LoadingOrError';
import { Footer } from 'components/organisms/Footer/Footer';
import { Form } from 'components/organisms/Form/Form';

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Pole wymagane';
  } else if (values.name.length < 2) {
    errors.name = 'Must be 2 characters or more';
  }

  if (!values.inventoryNumber) {
    errors.inventoryNumber = 'Pole wymagane';
  } else if (values.inventoryNumber.length < 2) {
    errors.inventoryNumber = 'Must be 2 characters or more';
  }

  if (!values.serialNumber) {
    errors.serialNumber = 'Pole wymagane';
  } else if (values.serialNumber.length < 2) {
    errors.serialNumber = 'Must be 2 characters or more';
  }

  if (!values.description) {
    errors.description = 'Pole wymagane';
  } else if (values.description.length < 2) {
    errors.description = 'Must be 2 characters or more';
  }

  if (!values.userId) {
    errors.userId = 'Pole wymagane';
  }

  if (!values.inventoryId) {
    errors.inventoryId = 'Pole wymagane';
  }

  return errors;
};
export const FixedAssetEdit = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const navigateToFixedAsset = () => {
    navigate(requests.fixedAssetManagement);
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
        axios.put(`${requests.singleFixedAsset}/${id}`, values, {
          headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
        });
        alert('Edytowano środek trwały');
        navigateToFixedAsset();
      } catch (error) {
        console.error(error.message);
      }
    },
  });

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${requests.singleFixedAsset}/${id}`, {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
      });
      const data = response.data;

      await formik.setValues({
        ...data,
      });
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header title={`Edycja: ${formik.values.name}`} hasLogoutButton />
      <ContentWrapper>
        {!loading && !error ? (
          <Form id="fixedAssetEditForm" onSubmit={formik.handleSubmit}>
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
              label="Id Użytkownika"
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
          </Form>
        ) : (
          <LoadingOrError msg={error ? error : 'Loading...'} />
        )}
      </ContentWrapper>
      <Footer hasBackToPrevPageButton hasDeleteFixedAssetButton hasSaveEditedFixedAssetButton />
    </>
  );
};
