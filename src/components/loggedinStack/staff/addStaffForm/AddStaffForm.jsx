import React, { useState } from "react";
import "./AddStaffForm.css";
import { Formik } from "formik";
import FormInput from "../../common/formInput/FormInput";
import FormButton from "../../common/formButton/FormButton";
import FormSelect from "../../common/formSelect/FormSelect";
import * as Yup from "yup";
import FormImageInput from "../../common/formImageInput/FormImageInput";

const options = [
  {
    value: "Staff",
    label: "Staff",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "Admin",
    label: "Admin",
  },
];

function AddStaffForm({
  firstName,
  lastName,
  email,
  role,
  phone,
  image,
  setImage,
  setFirstName,
  setLastName,
  setEmail,
  setRole,
  setPhone,
  onAdd,
  buttonName,
}) {
  const [profile, setProfile] = useState(image);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    firstName: Yup.string().required().label("First Name"),
    lastName: Yup.string().required().label("Last Name"),
    phone: Yup.string().required().min(11).max(11).label("Phone Number"),
    role: Yup.string().required("Please select a role"),
    image: Yup.string().required("Please select a profile picture"),
  });

  return (
    <div className="addForm">
      <Formik
        initialValues={{
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phone,
          role: role,
          image: profile,
        }}
        onSubmit={(values, actions) => {
          onAdd();
        }}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          handleSubmit,
          errors,
          values,
          touched,
          setFieldValue,
        }) => (
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
            <FormSelect
              options={options}
              placeholder="Please select a role"
              label="Role"
              onChange={(value) => setFieldValue("role", value.value)}
              value={values.role}
              error={touched.role && errors.role}
            />
            <FormInput
              label="Email*"
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
                e.target.value = e.target.value.slice(0, 11);
                setFieldValue("phone", e.target.value);
              }}
            />
            <FormImageInput
              value={values.image}
              onChange={(value) => setFieldValue("image", value)}
              error={touched.image && errors.image}
            />
            <FormButton
              label={buttonName ? buttonName : "Add Staff"}
              onClick={() => {
                if (
                  !errors.email &&
                  !errors.phone &&
                  !errors.firstName &&
                  !errors.lastName &&
                  !errors.role &&
                  !errors.image
                ) {
                  setEmail(values.email);
                  setFirstName(values.firstName);
                  setLastName(values.lastName);
                  setPhone(values.phone);
                  setRole(values.role);
                  setImage(values.image);
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

export default AddStaffForm;
