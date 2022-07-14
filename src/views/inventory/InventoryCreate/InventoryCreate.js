import React from 'react';
import axios from 'axios';
import { Wrapper, InnerWrapper } from 'components/atoms/PanelStyles/PanelStyles';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/organisms/ContentWrapper/ContentWrapper';
import { Footer } from 'components/organisms/Footer/Footer';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage } from 'components/molecules/ErrorMessage/ErrorMessage';
import { FormField } from 'components/molecules/FormField/FormField';

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 2) {
    errors.name = 'Must be 2 characters or more';
  }

  if (!values.startDate) {
    errors.startDate = 'Required';
  }

  if (!values.closeDate) {
    errors.closeDate = 'Required';
  } else if (values.closeDate < values.startDate) {
    errors.closeDate = 'Wrong close date';
  }

  return errors;
};

export const InventoryCreate = () => {
  const navigate = useNavigate();

  const navigateToAccountantPanel = () => {
    navigate('/accountant-panel');
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      startDate: '',
      closeDate: '',
    },
    validate,
    onSubmit: (values) => {
      try {
        axios.post('https://localhost:5001/api/inventory', values);
        navigateToAccountantPanel();
        alert('Utworzono nowa inwentaryzacje! :)');
      } catch (error) {
        console.error(error.message);
      }
    },
  });

  return (
    <>
      <Header title="Nowa Inwentaryzacja" companyName="Compolexos" hasLogoutButton />
      <ContentWrapper>
        <form id="inventoryCreateForm" onSubmit={formik.handleSubmit}>
          <FormField label="Nazwa" id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.name} />
          {formik.errors.name ? <ErrorMessage errorMsg={formik.errors.name} /> : null}

          <FormField
            label="Data rozpoczecia"
            id="startDate"
            name="startDate"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.startDate}
          />
          {formik.errors.startDate ? <ErrorMessage errorMsg={formik.errors.startDate} /> : null}

          <FormField
            label="Data zakonczenia"
            id="closeDate"
            name="closeDate"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.closeDate}
          />
          {formik.errors.closeDate ? <ErrorMessage errorMsg={formik.errors.closeDate} /> : null}
        </form>
        {/* <Button name="addFile" text="Dodaj plik" onClick={() => alert('dziala dodaj plik button')} /> */}
      </ContentWrapper>

      <Footer hasBackToPrevPageButton hasCreateInventoryButton />
    </>
  );
};
