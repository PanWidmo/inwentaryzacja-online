import axios from 'api/axios';
import { requests } from 'api/requests';
import { useNavigate } from 'react-router-dom';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { useFormik } from 'formik';
import { FormField } from 'components/molecules/FormField/FormField';
import { Footer } from 'components/organisms/Footer/Footer';
import { Form } from 'components/organisms/Form/Form';
import { useEffect, useState } from 'react';
import { FormSelect } from 'components/molecules/FormSelects/FormSelect';
import { LoadingOrError } from 'components/molecules/LoadingOrError/LoadingOrError';

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Pole wymagane';
  } else if (values.name.length < 3) {
    errors.name = 'Wymagane minimum 3 znaki';
  }

  if (!values.startDate) {
    errors.startDate = 'Pole wymagane';
  }

  if (!values.closeDate) {
    errors.closeDate = 'Pole wymagane';
  } else if (values.closeDate < values.startDate) {
    errors.closeDate = 'Zła data';
  }

  return errors;
};

export const InventoryCreate = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const navigateToAccountantPanel = () => {
    navigate(requests.accountantPanel);
  };

  const getData = async () => {
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

  const formik = useFormik({
    initialValues: {
      name: '',
      startDate: '',
      closeDate: '',
      userId: '',
    },
    validate,
    onSubmit: (values) => {
      try {
        axios.post(requests.singleInventory, values, {
          headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
        });
        alert('Utworzono nową inwentaryzację');
        navigateToAccountantPanel();
      } catch (error) {
        console.error(error.message);
      }
    },
  });

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header title="Nowa Inwentaryzacja" hasLogoutButton />
      <ContentWrapper>
        {!loading && !error && data?.length ? (
          <Form id="inventoryCreateForm" onSubmit={formik.handleSubmit}>
            <FormField
              label="Numer/ Nazwa"
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
              error={formik.touched.name && formik.errors.name ? formik.errors.name : null}
            />

            <FormField
              label="Data rozpoczęcia"
              id="startDate"
              name="startDate"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.startDate}
              onBlur={formik.handleBlur}
              error={formik.touched.startDate && formik.errors.startDate ? formik.errors.startDate : null}
            />

            <FormField
              label="Data zakończenia"
              id="closeDate"
              name="closeDate"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.closeDate}
              onBlur={formik.handleBlur}
              error={formik.touched.closeDate && formik.errors.closeDate ? formik.errors.closeDate : null}
            />
            <FormSelect label="Prowadzący" id="userId" name="userId" value={formik.values.userId} onChange={formik.handleChange} data={data} />
          </Form>
        ) : (
          <LoadingOrError msg={error ? error : 'Ładowanie...'} />
        )}
      </ContentWrapper>

      <Footer hasBackToPrevPageButton hasCreateInventoryButton />
    </>
  );
};
