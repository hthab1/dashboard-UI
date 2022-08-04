import { Formik } from "formik";
import React, { useState } from "react";
import FormButton from "../../../common/formButton/FormButton";
import FormInput from "../../../common/formInput/FormInput";
import "./AddForm.css";
import * as Yup from "yup";

function AddForm({
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
  handleAdd,
  firstName,
  lastName,
  email,
  phone,
}) {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    firstName: Yup.string().required().label("First Name"),
    lastName: Yup.string().required().label("Last Name"),
    phone: Yup.string().required().min(11).max(11).label("Phone Number"),
  });

  return (
    <div className="addForm">
      <Formik
        initialValues={{ firstName: firstName, lastName: lastName, email: email, phone: phone }}
        onSubmit={(values, actions) => {
          handleAdd();
        }}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, values, touched, setFieldValue }) => (
          <>
            <FormInput
              label="First Name*"
              placeholder="Enter first name"
              value={values.firstName}
              onChange={handleChange("firstName")}
              error={touched.firstName && errors.firstName}
            />
            <FormInput
              label="Last Name*"
              placeholder="Enter last name"
              value={values.lastName}
              onChange={handleChange("lastName")}
              error={touched.lastName && errors.lastName}
            />
            <FormInput
              label="Email Id*"
              placeholder="Enter email address"
              value={values.email}
              onChange={handleChange("email")}
              error={touched.email && errors.email}
            />
            <FormInput
              label="Phone No*"
              placeholder="Enter phone number"
              maxLength={11}
              value={values.phone}
              error={touched.phone && errors.phone}
              type="number"
              onInput={(e) => {
                e.target.value = e.target.value.slice(0, 11)
                setFieldValue("phone", e.target.value)
              }}
            />
            <FormButton
              label="Continue"
              onClick={() => {
                if (
                  !errors.email &&
                  !errors.phone &&
                  !errors.firstName &&
                  !errors.lastName
                ) {
                  setEmail(values.email);
                  setFirstName(values.firstName);
                  setLastName(values.lastName);
                  setPhone(values.phone);
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

export default AddForm;
