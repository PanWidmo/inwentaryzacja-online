import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/organisms/ContentWrapper/ContentWrapper';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { InfoLabel } from 'components/atoms/InfoLabel/InfoLabel';
import { FormField } from 'components/molecules/FormField/FormField';
import { LoginProblemLink } from 'components/atoms/LoginProblemLink/LoginProblemLink';
import { useAuth } from 'hooks/useAuth';
import { Button } from 'components/molecules/Button/Button';

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      await signIn(email, password);
      navigate('/admin-panel'); //TO CHANGE! temporary redirection till other view will be done :)
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Header title="Logowanie do systemu inwentaryzacji" companyName="Compolexos" />
      <ContentWrapper>
        <ViewWrapper as="form" onSubmit={handleSubmit}>
          <InfoLabel>Wpisz swoje dane:</InfoLabel>
          <FormField label="EMAIL" id="email" name="email" type="email" ref={emailRef} />
          <FormField label="HASŁO" id="password" name="password" type="password" ref={passwordRef} />
          <LoginProblemLink to="/auth/login-reset-password">Problem z logowaniem?</LoginProblemLink>
          <Button name="login" text="Zaloguj" type="submit" />
        </ViewWrapper>
      </ContentWrapper>
    </>
  );
};
