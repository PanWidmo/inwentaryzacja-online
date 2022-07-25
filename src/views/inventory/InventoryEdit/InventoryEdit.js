import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Wrapper, InnerWrapper } from 'components/atoms/PanelStyles/PanelStyles';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { Footer } from 'components/organisms/Footer/Footer';
import { FormField } from 'components/molecules/FormField/FormField';
import { useFormik } from 'formik';
import { ErrorMessage } from 'components/molecules/ErrorMessage/ErrorMessage';
import { useNavigate, useParams } from 'react-router-dom';
import { Loading } from 'components/molecules/Loading/Loading';

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

export const InventoryEdit = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const navigateToInventory = () => {
    navigate('/inventory-management');
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
        axios.put(`https://localhost:5001/api/inventory/${id}`, values);
        alert('Edytowano inwentaryzacje! :)');
        navigateToInventory();
      } catch (error) {
        console.error(error.message);
      }
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://localhost:5001/api/inventory/${id}`);
        const data = response.data;

        await formik.setValues({
          name: data.name,
          startDate: data.startDate.slice(0, 10),
          closeDate: data.closeDate.slice(0, 10),
        });
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Header title="Edycja inwentaryzacji" companyName="Compolexos" hasLogoutButton />
      <ContentWrapper>
        {!loading ? (
          <form id="inventoryEditForm" onSubmit={formik.handleSubmit}>
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
        ) : (
          <Loading />
        )}
      </ContentWrapper>
      <Footer hasBackToPrevPageButton hasDeleteInventoryButton hasSaveEditedInventoryButton />
    </>
  );
};
