import { useState, useEffect } from 'react';
import axios from 'api/axios';
import { requests } from 'api/requests';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { useFormik } from 'formik';
import { FormField } from 'components/molecules/FormField/FormField';
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

  if (!values.startDate) {
    errors.startDate = 'Pole wymagane';
  }

  if (!values.closeDate) {
    errors.closeDate = 'Pole wymagane';
  } else if (values.closeDate < values.startDate) {
    errors.closeDate = 'Wrong close date';
  }

  return errors;
};

export const InventoryEdit = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const navigateToInventory = () => {
    navigate(requests.inventoryManagement);
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
        axios.put(`${requests.singleInventory}/${id}`, values, {
          headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
        });
        alert('Edytowano inwentaryzację');
        navigateToInventory();
      } catch (error) {
        console.error(error.message);
      }
    },
  });

  const getUsers = async () => {
    setLoading(true);

    try {
      const result = await axios.get(requests.singleUser, {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
      });
      setData(result.data);
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
    setLoading(false);
  };

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${requests.singleInventory}/${id}`, {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
      });
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
    getUsers();
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header title="Edycja inwentaryzacji" hasLogoutButton />
      <ContentWrapper>
        {!loading && !error ? (
          <Form id="inventoryEditForm" onSubmit={formik.handleSubmit}>
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
              label="Data rozpoczecia"
              id="startDate"
              name="startDate"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.startDate}
              onBlur={formik.handleBlur}
              error={formik.touched.startDate && formik.errors.startDate ? formik.errors.startDate : null}
            />

            <FormField
              label="Data zakonczenia"
              id="closeDate"
              name="closeDate"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.closeDate}
              onBlur={formik.handleBlur}
              error={formik.touched.closeDate && formik.errors.closeDate ? formik.errors.closeDate : null}
            />
          </Form>
        ) : (
          <LoadingOrError msg={error ? error : 'Loading...'} />
        )}
      </ContentWrapper>
      <Footer hasBackToPrevPageButton hasDeleteInventoryButton hasSaveEditedInventoryButton />
    </>
  );
};
