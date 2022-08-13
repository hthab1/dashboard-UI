import React, { useState } from "react";
import "./AddProductForm.css";
import { Formik } from "formik";
import FormInput from "../../common/formInput/FormInput";
import FormButton from "../../common/formButton/FormButton";
import * as Yup from "yup";

function AddProductForm({
  name,
  setName,
  quantity,
  setQuantity,
  price,
  setPrice,
  buttonName,
  onAdd,
}) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Please enter product name"),
    quantity: Yup.string().required("Please enter product quantity"),
    price: Yup.string().required("Please enter product price"),
  });

  return (
    <div className="addProductForm">
      <Formik
        initialValues={{ name: name, quantity: quantity, price: price }}
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
              label="Product Name*"
              placeholder="Enter product name"
              value={values.name}
              onChange={handleChange("name")}
              error={touched.name && errors.name}
            />
            <FormInput
              label="Quantity*"
              placeholder="Enter product quantity"
              value={values.quantity}
              onChange={handleChange("quantity")}
              error={touched.quantity && errors.quantity}
              type="number"
            />
            <FormInput
              label="Price*"
              placeholder="Enter product price"
              type="number"
              value={values.price}
              onChange={handleChange("price")}
              error={touched.price && errors.price}
            />

            <FormButton
              label={buttonName ? buttonName : "Add Product"}
              onClick={() => {
                if (!errors.name && !errors.quantity && !errors.price) {
                  setName(values.name);
                  setQuantity(values.quantity);
                  setPrice(values.price);
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

export default AddProductForm;
