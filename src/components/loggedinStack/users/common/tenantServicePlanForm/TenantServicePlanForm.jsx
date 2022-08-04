import { Formik } from "formik";
import React, { useState } from "react";
import FormButton from "../../../common/formButton/FormButton";
import FormInput from "../../../common/formInput/FormInput";
import "./TenantServicePlanForm.css";
import * as Yup from "yup";
import FormSelect from "../../../common/formSelect/FormSelect";
import FormDatePicker from "../../../common/formDatePicker/FormDatePicker";

const options = [
  { value: "monthly", label: "Monthly" },
  { value: "quarterly", label: "Quarterly" },
  { value: "semi-annualy", label: "Semi-annually" },
  { value: "annualy", label: "Annually" },
];

function TenantServicePlanForm({
  setServiceChargePlan,
  setRentalFee,
  setServiceCharge,
  setStartDate,
  handleContinue,
  serviceChargePlan,
  rentalFee,
  serviceCharge,
  startDate,
}) {
  let date = new Date();

  const getDate = (date) => {
    let timeStamp = new Date(date)

    return timeStamp.toLocaleDateString()
  }

  const validationSchema = Yup.object().shape({
    serviceChargePlan: Yup.string().required(
      "Please select a servcie charge plan"
    ),
    rentalFee: Yup.string().required("Please select a rental fee"),
    serviceCharge: Yup.string().required("Please select a service charge"),
    startDate: Yup.date().required("Please enter a start date"),
  });

  return (
    <div className="tenantServicePlanForm">
      <Formik
        initialValues={{
          serviceChargePlan: serviceChargePlan,
          rentalFee: rentalFee,
          serviceCharge: serviceCharge,
          startDate: startDate,
        }}
        onSubmit={() => handleContinue()}
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
            <FormSelect
              options={options}
              placeholder="Please select a payment plan"
              label="Service Charge Plan"
              onChange={(value) =>
                setFieldValue("serviceChargePlan", value.value)
              }
              value={values.serviceChargePlan}
              error={touched.serviceChargePlan && errors.serviceChargePlan}
            />
            <FormInput
              label="Rental fee*"
              placeholder="Enter a rental fee"
              value={values.rentalFee}
              onChange={handleChange("rentalFee")}
              error={touched.rentalFee && errors.rentalFee}
              type="number"
            />
            <FormInput
              label="Service charge*"
              placeholder="Enter service charge"
              value={values.serviceCharge}
              onChange={handleChange("serviceCharge")}
              error={touched.serviceCharge && errors.serviceCharge}
              type="number"
            />
            <FormDatePicker
              label="Start Date*"
              placeholder="Select start date"
              // startDate={date}
              value={values.startDate? getDate(values.startDate): parseInt(values.startDate)}
              onChange={(date) => setFieldValue("startDate", date)}
              error={touched.startDate && errors.startDate}
            />
            <FormButton
              label="Continue"
              onClick={() => {
                if (
                  !errors.serviceChargePlan &&
                  !errors.rentalFee &&
                  !errors.serviceCharge &&
                  !errors.startDate
                ) {
                  setServiceChargePlan(values.serviceChargePlan);
                  setServiceCharge(values.serviceCharge);
                  setRentalFee(values.rentalFee);
                  setStartDate(getDate(values.startDate));
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

export default TenantServicePlanForm;
