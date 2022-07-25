import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { InfoLabel } from 'components/atoms/InfoLabel/InfoLabel';
import { FormField } from 'components/molecules/FormField/FormField';
import { useAuth } from 'hooks/useAuth';
import { Button } from 'components/organisms/Button/Button';
import { useFormik } from 'formik';
import { ErrorMessage } from 'components/molecules/ErrorMessage/ErrorMessage';

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

export const ResetPassword = () => {
  const navigate = useNavigate();
  const { resetPassword } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (values) => {
      try {
        resetPassword(values.email);
        navigate('/auth/login-reset-password-confirmation');
      } catch (error) {
        console.error(error.message);
      }
    },
  });

  return (
    <>
      <Header title="Problem z logowaniem" companyName="Compolexos" />
      <ContentWrapper>
        <ViewWrapper as="form" onSubmit={formik.handleSubmit}>
          <InfoLabel>Wpisz swój adres email:</InfoLabel>
          <FormField
            label="EMAIL"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? <ErrorMessage errorMsg={formik.errors.email} /> : null}
          <Button name="blue" text="Wyslij" type="submit" />
        </ViewWrapper>
      </ContentWrapper>
    </>
  );
};
