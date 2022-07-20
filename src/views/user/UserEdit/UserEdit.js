import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Wrapper, InnerWrapper, TableWrapper } from 'components/atoms/PanelStyles/PanelStyles';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/organisms/ContentWrapper/ContentWrapper';
import { Footer } from 'components/organisms/Footer/Footer';
import { useParams } from 'react-router';
import { FormField } from 'components/molecules/FormField/FormField';
import { ErrorMessage } from 'components/molecules/ErrorMessage/ErrorMessage';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../../components/molecules/Loading/Loading';
import { FormSelectPermission } from 'components/molecules/FormSelect/FormSelectPermission';

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

  return errors;
};

export const UserEdit = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
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
        axios.put(`https://localhost:5001/api/user/${id}`, values);
        navigateToUsers();
        alert('Edytowano uzytkownika! :)');
      } catch (error) {
        console.error(error.message);
      }
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://localhost:5001/api/user/${id}`);
        const data = response.data;

        formik.setValues({
          ...data,
        });
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Header title="Edytuj dane użytkownika" companyName="Compolexos" hasLogoutButton />
      <ContentWrapper>
        {!loading ? (
          <form id="userEditForm" onSubmit={formik.handleSubmit}>
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

            <FormSelectPermission
              label="Uprawnienia"
              id="permissionId"
              name="permissionId"
              value={formik.values.permissionId}
              onChange={formik.handleChange}
            />
          </form>
        ) : (
          <Loading />
        )}
      </ContentWrapper>
      <Footer hasBackToPrevPageButton hasDeleteUserButton hasSaveEditedUserButton />
    </>
  );
};
