import axios from 'api/axios';
import { requests } from 'api/requests';
import { useNavigate } from 'react-router-dom';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { useFormik } from 'formik';
import { FormField } from 'components/molecules/FormField/FormField';
import { FormSelectPermission } from 'components/molecules/FormSelectPermission/FormSelectPermission';
import { Footer } from 'components/organisms/Footer/Footer';
import { Form } from 'components/organisms/Form/Form';

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

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password < 6) {
    errors.password = 'Must be 6 characters or more';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Required';
  } else if (values < 6) {
    errors.confirmPassword = 'Must be 6 characters or more';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords must be the same';
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
      password: '',
      confirmPassword: '',
      email: '',
      phoneNumber: '',
      permissionId: 1,
    },
    validate,
    onSubmit: (values) => {
      try {
        axios.post(requests.singleUser, values, {
          headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
        });
        alert('Uzytkownik dodany! :)');
        navigateToUsers();
      } catch (error) {
        console.error(error.message);
      }
    },
  });

  return (
    <>
      <Header title="Dodaj nowego uzytkownika" hasLogoutButton />
      <ContentWrapper>
        <Form id="userCreateForm" onSubmit={formik.handleSubmit}>
          <FormField
            label="Imie"
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            error={formik.touched.name && formik.errors.name ? formik.errors.name : null}
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
            label="Login"
            id="login"
            name="login"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.login}
            onBlur={formik.handleBlur}
            error={formik.touched.login && formik.errors.login ? formik.errors.login : null}
          />

          <FormField
            label="Haslo"
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            error={formik.touched.password && formik.errors.password ? formik.errors.password : null}
          />

          <FormField
            label="Powtorz haslo"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            onBlur={formik.handleBlur}
            error={formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : null}
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
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            error={formik.touched.phoneNumber && formik.errors.phoneNumber ? formik.errors.phoneNumber : null}
          />

          <FormSelectPermission
            label="Uprawnienia"
            id="permissionId"
            name="permissionId"
            value={formik.values.permissionId}
            onChange={formik.handleChange}
          />
        </Form>
      </ContentWrapper>
      <Footer hasBackToPrevPageButton hasCreateUserButton />
    </>
  );
};
