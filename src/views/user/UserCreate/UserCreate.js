import axios from 'api/axios';
import { requests } from 'api/requests';
import { useNavigate } from 'react-router-dom';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { useFormik } from 'formik';
import { FormField } from 'components/molecules/FormField/FormField';
import { FormSelectPermission } from 'components/molecules/FormSelectPermission/FormSelectPermission';
import { ErrorMessage } from 'components/molecules/ErrorMessage/ErrorMessage';
import { Footer } from 'components/organisms/Footer/Footer';

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
  } else if (!/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = 'Required';
  } else if (values.phoneNumber.length !== 9) {
    errors.phoneNumber = 'Must have 9 characters.';
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
      permissionId: 1,
    },
    validate,
    onSubmit: (values) => {
      try {
        axios.post(requests.singleUser, values);
        alert('Uzytkownik dodany! :)');
        navigateToUsers();
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
          <FormField
            label="Imie"
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? <ErrorMessage errorMsg={formik.errors.name} /> : null}

          <FormField
            label="Nazwisko"
            id="surname"
            name="surname"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.surname}
            onBlur={formik.handleBlur}
          />
          {formik.touched.surname && formik.errors.surname ? <ErrorMessage errorMsg={formik.errors.surname} /> : null}

          <FormField
            label="Login"
            id="login"
            name="login"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.login}
            onBlur={formik.handleBlur}
          />
          {formik.touched.login && formik.errors.login ? <ErrorMessage errorMsg={formik.errors.login} /> : null}

          <FormField
            label="Email"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? <ErrorMessage errorMsg={formik.errors.email} /> : null}

          <FormField
            label="Telefon"
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? <ErrorMessage errorMsg={formik.errors.phoneNumber} /> : null}

          <FormSelectPermission
            label="Uprawnienia"
            id="permissionId"
            name="permissionId"
            value={formik.values.permissionId}
            onChange={formik.handleChange}
          />
        </form>
      </ContentWrapper>
      <Footer hasBackToPrevPageButton hasCreateUserButton />
    </>
  );
};
