import { useState, useEffect } from 'react';
import axios from 'api/axios';
import { requests } from 'api/requests';
import { useParams } from 'react-router-dom';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { FormField } from 'components/molecules/FormField/FormField';
import { useFormik } from 'formik';
import { LoadingOrError } from 'components/molecules/LoadingOrError/LoadingOrError';
import { Form } from 'components/organisms/Form/Form';
import { Footer } from 'components/organisms/Footer/Footer';

export const IssueEdit = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      title: '',
      name: '',
      surname: '',
      email: '',
      description: '',
    },
  });

  const getData = async () => {
    setLoading(true);
    try {
      // TODO: po dodaniu endpointa check czy dziala prawidlowo
      const response = await axios.get(`${requests.singleIssue}/${id}`, {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
      });
      const data = response.data;

      await formik.setValues({
        title: data.title,
        name: data.name,
        surname: data.surname,
        email: data.email,
        description: data.description,
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
      <Header title={`Edytuj: ${formik.values.title} `} hasLogoutButton />
      <ContentWrapper>
        {!loading && !error ? (
          <Form id="userEditForm" onSubmit={formik.handleSubmit}>
            <FormField
              label="Tytuł"
              id="title"
              name="title"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.title}
              onBlur={formik.handleBlur}
              disabled="disabled"
            />

            <FormField
              label="Imię"
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
              disabled="disabled"
            />

            <FormField
              label="Nazwisko"
              id="surname"
              name="surname"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.surname}
              onBlur={formik.handleBlur}
              disabled="disabled"
            />
            <FormField
              label="Email"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              disabled="disabled"
            />
            <FormField
              label="Opis problemu"
              id="description"
              name="description"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.description}
              onBlur={formik.handleBlur}
              disabled="disabled"
            />
          </Form>
        ) : (
          <LoadingOrError msg={error ? error : 'Ładowanie...'} />
        )}
      </ContentWrapper>
      <Footer hasBackToPrevPageButton hasDeleteIssueButton />
    </>
  );
};
