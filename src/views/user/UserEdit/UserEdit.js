import { useState, useEffect } from 'react';
import axios from 'api/axios';
import { requests } from 'api/requests';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { FormField } from 'components/molecules/FormField/FormField';
import { useFormik } from 'formik';
import { FormSelectPermission } from 'components/molecules/FormSelects/FormSelectPermission';
import { LoadingOrError } from 'components/molecules/LoadingOrError/LoadingOrError';
import { Form } from 'components/organisms/Form/Form';
import { Footer } from 'components/organisms/Footer/Footer';

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Pole wymagane';
  } else if (values.firstName.length < 3) {
    errors.firstName = 'Wymagane minimum 3 znaki';
  }

  if (!values.surname) {
    errors.surname = 'Pole wymagane';
  } else if (values.surname.length < 3) {
    errors.surname = 'Wymagane minimum 3 znaki';
  }

  if (!values.email) {
    errors.email = 'Pole wymagane';
  } else if (!/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Zły adres email';
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = 'Pole wymagane';
  } else if (values.phoneNumber.length !== 9) {
    errors.phoneNumber = 'Wymagane 9 znaków';
  }

  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Hasła muszą być takie same';
  }

  return errors;
};

export const UserEdit = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const navigateToUsers = () => {
    navigate(requests.userManagement);
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      surname: '',
      login: '',
      password: '',
      confirmPassword: '',
      email: '',
      phoneNumber: '',
      permissionId: '',
    },
    validate,
    onSubmit: (values) => {
      try {
        axios.put(`${requests.singleUser}/${id}`, values, {
          headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
        });
      } catch (error) {
        console.error(error.message);
      }
      alert('Edytowano użytkownika');
      navigateToUsers();
    },
  });

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${requests.singleUser}/${id}`, {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
      });
      const data = response.data;

      await formik.setValues({
        firstName: data.firstName,
        surname: data.surname,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        phoneNumber: data.phoneNumber,
        permissionId: data.permissionId,
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
      <Header title={`Edytuj: ${formik.values.firstName} ${formik.values.surname}`} hasLogoutButton />
      <ContentWrapper>
        {!loading && !error ? (
          <Form id="userEditForm" onSubmit={formik.handleSubmit}>
            <FormField
              label="Imię"
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              onBlur={formik.handleBlur}
              error={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : null}
            />

            <FormField
              label="Nazwisko"
              id="surname"
              name="surname"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.surname}
              onBlur={formik.handleBlur}
              error={formik.touched.surname && formik.errors.surname ? formik.errors.surname : null}
            />
            <FormField
              label="Email"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              error={formik.touched.email && formik.errors.email ? formik.errors.email : null}
            />

            <FormField
              label="Telefon"
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              pattern="[0-9]*"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              onBlur={formik.handleBlur}
              error={formik.touched.phoneNumber && formik.errors.phoneNumber ? formik.errors.phoneNumber : null}
            />
            <FormField
              label="Hasło"
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              error={formik.touched.password && formik.errors.password ? formik.errors.password : null}
            />

            <FormField
              label="Powtórz hasło"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              onBlur={formik.handleBlur}
              error={formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : null}
            />

            <FormSelectPermission
              label="Uprawnienia"
              id="permissionId"
              name="permissionId"
              value={formik.values.permissionId}
              onChange={formik.handleChange}
            />
          </Form>
        ) : (
          <LoadingOrError msg={error ? error : 'Ładowanie...'} />
        )}
      </ContentWrapper>
      <Footer hasBackToPrevPageButton hasDeleteUserButton hasSaveEditedUserButton />
    </>
  );
};
