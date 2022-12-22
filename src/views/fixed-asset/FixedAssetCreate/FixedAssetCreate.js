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

  if (!values.serialNumber) {
    errors.serialNumber = 'Pole wymagane';
  } else if (values.serialNumber.length < 3) {
    errors.serialNumber = 'Wymagane minimum 3 znaki';
  }

  if (!values.description) {
    errors.description = 'Pole wymagane';
  } else if (values.description.length < 3) {
    errors.description = 'Wymagane minimum 3 znaki';
  }

  return errors;
};

export const FixedAssetCreate = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const navigateToFixedAsset = () => {
    navigate(requests.fixedAssetManagement);
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
      serialNumber: '',
      userId: '',
      description: '',
    },
    validate,
    onSubmit: (values) => {
      try {
        axios.post(requests.singleFixedAsset, values, {
          headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
        });
        alert('Dodano środek trwały');
        navigateToFixedAsset();
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
      <Header title="Dodanie nowego środka trwałego" hasLogoutButton />
      <ContentWrapper>
        {!loading && !error ? (
          <Form id="fixedAssetCreateForm" onSubmit={formik.handleSubmit}>
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
              label="Numer Seryjny"
              id="serialNumber"
              name="serialNumber"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.serialNumber}
              onBlur={formik.handleBlur}
              error={formik.touched.serialNumber && formik.errors.serialNumber ? formik.errors.serialNumber : null}
            />

            <FormSelect label="Osoba przypisana" id="userId" name="userId" value={formik.values.userId} onChange={formik.handleChange} data={data} />

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
          </Form>
        ) : (
          <LoadingOrError msg={error ? error : 'Loading...'} />
        )}
      </ContentWrapper>
      <Footer hasBackToPrevPageButton hasCreateFixedAssetButton />
    </>
  );
};
