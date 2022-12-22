import axios from 'api/axios';
import { requests } from 'api/requests';
import { useNavigate } from 'react-router-dom';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { useFormik } from 'formik';
import { FormField } from 'components/molecules/FormField/FormField';
import { Footer } from 'components/organisms/Footer/Footer';
import { Form } from 'components/organisms/Form/Form';

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Pole wymagane';
  } else if (values.title.length < 3) {
    errors.title = 'Wymagane minimum 3 znaki';
  }

  if (!values.name) {
    errors.name = 'Pole wymagane';
  } else if (values.name.length < 3) {
    errors.name = 'Wymagane minimum 3 znaki';
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

  if (!values.description) {
    errors.description = 'Pole wymagane';
  } else if (values.description.length < 3) {
    errors.description = 'Wymagane minimum 3 znaki';
  }

  return errors;
};

export const IssuePage = () => {
  const navigate = useNavigate();

  const navigateToDefaultPage = () => {
    navigate(requests.default);
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      name: '',
      surname: '',
      email: '',
      description: '',
    },
    validate,
    onSubmit: (values) => {
      try {
        axios.post(requests.singleIssue, values, {
          headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
        });
      } catch (error) {
        console.error(error.message);
      }
      alert('Zgłoszenie wysłane');
      navigateToDefaultPage();
    },
  });

  return (
    <>
      <Header title="Dodaj nowe zgłoszenie" />
      <ContentWrapper>
        <Form id="issueCreateForm" onSubmit={formik.handleSubmit}>
          <FormField
            label="Tytuł"
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
            onBlur={formik.handleBlur}
            error={formik.touched.title && formik.errors.title ? formik.errors.title : null}
          />

          <FormField
            label="Imię"
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
            label="Opis problemu"
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            error={formik.touched.description && formik.errors.description ? formik.errors.description : null}
          />
        </Form>
      </ContentWrapper>
      <Footer hasBackToPrevPageButton hasCreateIssueButton />
    </>
  );
};
