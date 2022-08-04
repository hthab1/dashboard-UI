import { Formik } from "formik";
import React, { useState } from "react";
import FormButton from "../../../common/formButton/FormButton";
import FormInput from "../../../common/formInput/FormInput";
import "./EstateForm.css";
import * as Yup from "yup";

function EstateForm({ setEstate, setProperty, setApartment, handleAdd, estate, property, apartment }) {
  const validationSchema = Yup.object().shape({
    estate: Yup.string().required().label("Estate"),
    property: Yup.string().required().label("Property"),
    apartment: Yup.string().required().label("apartment"),
  });

  return (
    <div className="estateForm">
      <Formik
        initialValues={{ estate: estate, property: property, apartment: apartment }}
        onSubmit={() => handleAdd()}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, values, touched }) => (
          <>
            <FormInput
              label="Estate*"
              placeholder="Select estate"
              value={values.estate}
              onChange={handleChange("estate")}
              error={touched.estate && errors.estate}
            />
            <FormInput
              label="Property*"
              placeholder="Select property"
              value={values.property}
              onChange={handleChange("property")}
              error={touched.property && errors.property}
            />
            <FormInput
              label="Apartment*"
              placeholder="Select apartment"
              value={values.apartment}
              onChange={handleChange("apartment")}
              error={touched.apartment && errors.apartment}
            />
            <FormButton
              label="Continue"
              onClick={() => {
               if(!errors.estate && !errors.property && !errors.apartment){

                 setEstate(values.estate)
                 setProperty(values.property)
                 setApartment(values.apartment)
               }
                
                handleSubmit();
              }}
            />
          </>
        )}
      </Formik>
    </div>
  );
}

export default EstateForm;
