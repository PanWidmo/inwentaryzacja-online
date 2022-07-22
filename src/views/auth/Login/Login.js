import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/organisms/ContentWrapper/ContentWrapper';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { InfoLabel } from 'components/atoms/InfoLabel/InfoLabel';
import { FormField } from 'components/molecules/FormField/FormField';
import { LoginProblemLink } from 'components/atoms/LoginProblemLink/LoginProblemLink';
import { useAuth } from 'hooks/useAuth';
import { Button } from 'components/molecules/Button/Button';
import { useFormik } from 'formik';
import { ErrorMessage } from 'components/molecules/ErrorMessage/ErrorMessage';

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
};

export const Login = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      try {
        signIn(values.email, values.password);
        navigate('/select-user-role');
      } catch (error) {
        console.error(error.message);
      }
    },
  });

  return (
    <>
      <Header title="Logowanie do systemu inwentaryzacji" companyName="Compolexos" />
      <ContentWrapper>
        <ViewWrapper as="form" onSubmit={formik.handleSubmit}>
          <InfoLabel>Wpisz swoje dane:</InfoLabel>
          <FormField label="EMAIL" id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
          {formik.errors.email ? <ErrorMessage errorMsg={formik.errors.email} /> : null}
          <FormField label="HASŁO" id="password" name="password" type="password" onChange={formik.handleChange} value={formik.values.password} />
          {formik.errors.password ? <ErrorMessage errorMsg={formik.errors.password} /> : null}
          <LoginProblemLink to="/auth/login-reset-password">Problem z logowaniem?</LoginProblemLink>
          <Button name="blue" text="Zaloguj" type="submit" />
        </ViewWrapper>
      </ContentWrapper>
    </>
  );
};
