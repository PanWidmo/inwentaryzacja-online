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

  if (!values.surname) {
    errors.surname = 'Required';
  } else if (values.surname.length < 2) {
    errors.surname = 'Must be 2 characters or more';
  }

  if (!values.login) {
    errors.login = 'Required';
  } else if (values.login.length < 2) {
    errors.login = 'Must be 2 characters or more';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = 'Required';
  } else if (values.phoneNumber.length !== 9) {
    errors.phoneNumber = 'Must have 9 characters.';
  }

  if (!values.permissionId) {
    errors.permissionId = 'Required';
  } else if (values.permissionId.length !== 1) {
    errors.permissionId = 'Must have 1 character.';
  }

  return errors;
};

export const UserCreate = () => {
  const navigate = useNavigate();

  const navigateToUsers = () => {
    navigate('/user-management');
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      login: '',
      email: '',
      phoneNumber: '',
      permissionId: '',
    },
    validate,
    onSubmit: (values) => {
      try {
        axios.post('https://localhost:5001/api/user', values);
        navigateToUsers();
        alert('Uzytkownik dodany! :)');
      } catch (error) {
        console.error(error.message);
      }
    },
  });

  return (
    <>
      <Header title="Dodaj nowego uzytkownika" companyName="Compolexos" hasLogoutButton />
      <ContentWrapper>
        <form id="userCreateForm" onSubmit={formik.handleSubmit}>
          <FormField label="Imie" id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.name} />
          {formik.errors.name ? <ErrorMessage errorMsg={formik.errors.name} /> : null}

          <FormField label="Nazwisko" id="surname" name="surname" type="text" onChange={formik.handleChange} value={formik.values.surname} />
          {formik.errors.surname ? <ErrorMessage errorMsg={formik.errors.surname} /> : null}

          <FormField label="Login" id="login" name="login" type="text" onChange={formik.handleChange} value={formik.values.login} />
          {formik.errors.login ? <ErrorMessage errorMsg={formik.errors.login} /> : null}

          <FormField label="Email" id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
          {formik.errors.email ? <ErrorMessage errorMsg={formik.errors.email} /> : null}

          <FormField
            label="Telefon"
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
          />
          {formik.errors.phoneNumber ? <ErrorMessage errorMsg={formik.errors.phoneNumber} /> : null}

          <FormField
            label="Uprawnienia"
            id="permissionId"
            name="permissionId"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.permissionId}
          />
          {formik.errors.permissionId ? <ErrorMessage errorMsg={formik.errors.permissionId} /> : null}
        </form>
      </ContentWrapper>
      <Footer hasBackToPrevPageButton hasCreateUserButton />
    </>
  );
};
