import { Formik } from "formik";
import React, { useState } from "react";
import "./ChangePasswordForm.css";
import * as Yup from "yup";
import FormInput from "../../common/formInput/FormInput";
import FormButton from "../../common/formButton/FormButton";

function ChangePasswordForm({
  oldPassword,
  newPassword,
  confirmPassword,
  setOldPassword,
  setNewPassword,
  setConfirmPassword,
  onAdd,
}) {
  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().required("Please enter your old password"),
    newPassword: Yup.string().required("Please enter your new password").min(8, "Password should not be less than 8 characters"),
    confirmPassword: Yup.string()
      .required("Please confirm your new password")
      .oneOf([Yup.ref("newPassword"), null], "Your new password didn't match"),
  });

  return (
    <div className="changePasswordForm">
      <Formik
        initialValues={{
          oldPassword: oldPassword,
          newPassword: newPassword,
          confirmPassword: confirmPassword,
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
              label="Old Password*"
              placeholder="Enter your old password"
              value={values.oldPassword}
              onChange={handleChange("oldPassword")}
              error={touched.oldPassword && errors.oldPassword}
            />
            <FormInput
              label="New Password*"
              placeholder="Enter a new password"
              value={values.newPassword}
              onChange={handleChange("newPassword")}
              error={touched.newPassword && errors.newPassword}
            />
            <FormInput
              label="Confirm Password*"
              placeholder="Enter your new password again"
              value={values.confirmPassword}
              onChange={handleChange("confirmPassword")}
              error={touched.confirmPassword && errors.confirmPassword}
            />
            <FormButton
              label="Change"
              onClick={() => {
                if (
                  !errors.confirmPassword &&
                  !errors.oldPassword &&
                  !errors.newPassword
                ) {
                  setConfirmPassword(values.confirmPassword);
                  setOldPassword(values.oldPassword);
                  setNewPassword(values.newPassword);
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

export default ChangePasswordForm;
