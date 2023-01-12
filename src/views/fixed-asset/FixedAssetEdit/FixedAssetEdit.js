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
import { FormSelect } from 'components/molecules/FormSelects/FormSelect';

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

  if (!values.inventoryNumber) {
    errors.inventoryNumber = 'Pole wymagane';
  } else if (values.inventoryNumber.length < 3) {
    errors.inventoryNumber = 'Wymagane minimum 3 znaki';
  }

  return errors;
};
export const FixedAssetEdit = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const navigateToFixedAsset = () => {
    navigate(requests.fixedAssetManagement);
  };
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
      const response = await axios.get(`${requests.singleFixedAsset}/${id}`, {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
      });
      const data = response.data;

      await formik.setValues({
        name: data.name,
        serialNumber: data.serialNumber,
        inventoryNumber: data.inventoryNumber,
        userId: data.userId,
        description: data.description,
        // FIXME: do wywalenia
        inventoryId: 1,
      });
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
      inventoryNumber: '',
      userId: '',
      description: '',
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

  useEffect(() => {
    getUsers();
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
              label="Numer Inwentarzowy"
              id="inventoryNumber"
              name="inventoryNumber"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.inventoryNumber}
              onBlur={formik.handleBlur}
              error={formik.touched.inventoryNumber && formik.errors.inventoryNumber ? formik.errors.inventoryNumber : null}
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
          <LoadingOrError msg={error ? error : 'Ładowanie...'} />
        )}
      </ContentWrapper>
      <Footer hasBackToPrevPageButton hasDeleteFixedAssetButton hasSaveEditedFixedAssetButton />
    </>
  );
};
