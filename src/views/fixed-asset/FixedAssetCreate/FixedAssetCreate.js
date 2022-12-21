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
import { FormSelect } from 'components/molecules/FormSelect/FormSelect';

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Pole wymagane';
  } else if (values.name.length < 2) {
    errors.name = 'Must be 2 characters or more';
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

export const FixedAssetCreate = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

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
        alert('Dodano środek trwały');
        navigateToFixedAsset();
      } catch (error) {
        console.error(error.message);
      }
    },
  });

  return (
    <>
      {data.map((el) => {
        return (
          <option key={el.id} value={el.id}>
            {el.name} {el.surname}
          </option>
        );
      })}
      <Header title="Dodanie nowego środka trwałego" hasLogoutButton />
      <ContentWrapper>
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

          <FormSelect label="Użytkownik" id="userId" name="userId" value={formik.values.userId} onChange={formik.handleChange} data={data} />

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
      </ContentWrapper>
      <Footer hasBackToPrevPageButton hasCreateFixedAssetButton />
    </>
  );
};
