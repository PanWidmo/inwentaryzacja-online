import axios from 'api/axios';
import { requests } from 'api/requests';
import { useNavigate } from 'react-router-dom';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { useFormik } from 'formik';
import { FormField } from 'components/molecules/FormField/FormField';
import { ErrorMessage } from 'components/molecules/ErrorMessage/ErrorMessage';
import { Footer } from 'components/organisms/Footer/Footer';

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
        axios.post(requests.singleInventory, values, {
          headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
        });
        alert('Utworzono nowa inwentaryzacje! :)');
        navigateToAccountantPanel();
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
          <FormField
            label="Nazwa"
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? <ErrorMessage errorMsg={formik.errors.name} /> : null}

          <FormField
            label="Data rozpoczecia"
            id="startDate"
            name="startDate"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.startDate}
            onBlur={formik.handleBlur}
          />
          {formik.touched.startDate && formik.errors.startDate ? <ErrorMessage errorMsg={formik.errors.startDate} /> : null}

          <FormField
            label="Data zakonczenia"
            id="closeDate"
            name="closeDate"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.closeDate}
            onBlur={formik.handleBlur}
          />
          {formik.touched.closeDate && formik.errors.closeDate ? <ErrorMessage errorMsg={formik.errors.closeDate} /> : null}
        </form>
        {/* <Button name="green" text="Dodaj plik" onClick={() => alert('dziala dodaj plik button')} /> */}
      </ContentWrapper>

      <Footer hasBackToPrevPageButton hasCreateInventoryButton />
    </>
  );
};
