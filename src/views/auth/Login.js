import React, { useRef } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { TitleLeftTop } from 'components/atoms/TitleLeftTop/TitleLeftTop';
import { InfoLabel } from 'components/atoms/InfoLabel/InfoLabel';
import FormField from 'components/molecules/FormField/FormField';
import { LoginProblemLink } from 'components/atoms/LoginProblemLink/LoginProblemLink';
import { Button } from 'components/atoms/Button/Button';
import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';

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
      navigate('/APUsers'); //TO CHANGE! temporary redirection till other view will be done :)
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <TitleLeftTop>Logowanie do systemu inwentaryzacji</TitleLeftTop>
      <ViewWrapper as="form" onSubmit={handleSubmit}>
        <InfoLabel>Wpisz swoje dane:</InfoLabel>
        <FormField label="EMAIL" id="email" name="email" type="email" ref={emailRef} />
        <FormField label="HASŁO" id="password" name="password" type="password" ref={passwordRef} />
        <LoginProblemLink to="/reset-password">Problem z logowaniem?</LoginProblemLink>
        <Button name="blue" type="submit">
          Zaloguj
        </Button>
      </ViewWrapper>
    </>
  );
};
