import React from "react";
import "./AddPropertyForm.css";
import { Formik } from "formik";
import * as Yup from "yup";
import FormInput from "../../common/formInput/FormInput";
import FormButton from "../../common/formButton/FormButton";
import FormCoverInput from "../../common/formCoverInput/FormCoverInput";

function AddDevelopmentForm({
  name,
  location,
  image,
  setName,
  setLocation,
  setImage,
  onAdd,
  buttonName,
}) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Please enter the development name"),
    location: Yup.string().required("Please enter the location"),
    image: Yup.string().required("Please select a cover photo"),
  });

  return (
    <div className="addPropertyForm">
      <Formik
        initialValues={{ name: name, location: location, image: image }}
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
              label="Development Name*"
              placeholder="Enter development name"
              value={values.name}
              onChange={handleChange("name")}
              error={touched.name && errors.name}
            />
            <FormInput
              label="Location*"
              placeholder="Enter location"
              value={values.location}
              onChange={handleChange("location")}
              error={touched.location && errors.location}
            />
            <FormCoverInput
              label="Cover Photo*"
              value={values.image}
              onChange={(value) => setFieldValue("image", value)}
              error={touched.image && errors.image}
            />
            <FormButton
              label={buttonName ? buttonName : "Add Development"}
              onClick={() => {
                if (!errors.name && !errors.phone && !errors.image) {
                  setName(values.name);
                  setLocation(values.location);
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

export default AddDevelopmentForm;
