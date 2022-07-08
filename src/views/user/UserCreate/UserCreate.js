import React, { useRef } from 'react';
import axios from 'axios';

import { Wrapper, InnerWrapper } from 'components/atoms/PanelStyles/PanelStyles';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/organisms/ContentWrapper/ContentWrapper';
import { Footer } from 'components/organisms/Footer/Footer';
import { FormField } from 'components/molecules/FormField/FormField';

export const UserCreate = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const loginRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const permissionsRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name: firstNameRef.current.value,
      surname: lastNameRef.current.value,
      login: loginRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      permissionId: permissionsRef.current.value,
    };

    try {
      axios.post('https://localhost:5001/api/user', userData);
      e.target.reset();
      alert('Uzytkownik dodany! :)');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Header title="Dodaj nowego uzytkownika" companyName="Compolexos" hasLogoutButton />
      <ContentWrapper>
        <form id="userForm" onSubmit={handleSubmit}>
          <FormField label="Imie" id="firstName" name="firstName" type="text" ref={firstNameRef} />

          <FormField label="Nazwisko" id="lastName" name="lastName" type="text" ref={lastNameRef} />

          <FormField label="Login" id="login" name="login" type="text" ref={loginRef} />

          <FormField label="Email" id="email" name="email" type="email" ref={emailRef} />

          <FormField label="Telefon" id="phoneNumber" name="text" type="phoneNumber" ref={phoneNumberRef} />

          <FormField label="Uprawnienia" id="permissions" name="permissions" type="permissions" ref={permissionsRef} />
        </form>
      </ContentWrapper>
      <Footer hasBackToPrevPageButton hasAddUserToDBButton />
    </>
  );
};
