import { useState, useEffect } from 'react';
import axios from 'api/axios';
import { requests } from 'api/requests';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { useFormik } from 'formik';
import { FormField } from 'components/molecules/FormField/FormField';
import { ErrorMessage } from 'components/molecules/ErrorMessage/ErrorMessage';
import { LoadingOrError } from 'components/molecules/LoadingOrError/LoadingOrError';
import { Footer } from 'components/organisms/Footer/Footer';

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 2) {
    errors.name = 'Must be 2 characters or more';
  }

  if (!values.startDate) {
    errors.startDate = 'Required';
  }

  if (!values.closeDate) {
    errors.closeDate = 'Required';
  } else if (values.closeDate < values.startDate) {
    errors.closeDate = 'Wrong close date';
  }

  return errors;
};

export const InventoryEdit = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const navigateToInventory = () => {
    navigate('/inventory-management');
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      startDate: '',
      closeDate: '',
    },
    validate,
    onSubmit: (values) => {
      try {
        axios.put(`${requests.singleInventory}/${id}`, values);
        alert('Edytowano inwentaryzacje! :)');
        navigateToInventory();
      } catch (error) {
        console.error(error.message);
      }
    },
  });

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${requests.singleInventory}/${id}`);
      const data = response.data;

      await formik.setValues({
        name: data.name,
        startDate: data.startDate.slice(0, 10),
        closeDate: data.closeDate.slice(0, 10),
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
      <Header title="Edycja inwentaryzacji" companyName="Compolexos" hasLogoutButton />
      <ContentWrapper>
        {!loading && !error ? (
          <form id="inventoryEditForm" onSubmit={formik.handleSubmit}>
            <FormField
              label="Nazwa"
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? <ErrorMessage errorMsg={formik.errors.name} /> : null}

            <FormField
              label="Data rozpoczecia"
              id="startDate"
              name="startDate"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.startDate}
              onBlur={formik.handleBlur}
            />
            {formik.touched.startDate && formik.errors.startDate ? <ErrorMessage errorMsg={formik.errors.startDate} /> : null}

            <FormField
              label="Data zakonczenia"
              id="closeDate"
              name="closeDate"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.closeDate}
              onBlur={formik.handleBlur}
            />
            {formik.touched.closeDate && formik.errors.closeDate ? <ErrorMessage errorMsg={formik.errors.closeDate} /> : null}
          </form>
        ) : (
          <LoadingOrError msg={error ? error : 'Loading...'} />
        )}
      </ContentWrapper>
      <Footer hasBackToPrevPageButton hasDeleteInventoryButton hasSaveEditedInventoryButton />
    </>
  );
};
