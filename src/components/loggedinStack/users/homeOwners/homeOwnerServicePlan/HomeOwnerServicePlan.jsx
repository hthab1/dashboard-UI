import React, { useState } from "react";
import "./HomeOwnerServicePlan.css"
import { Formik } from "formik";
import FormButton from "../../../common/formButton/FormButton";
import FormInput from "../../../common/formInput/FormInput";
import * as Yup from "yup";
import FormSelect from "../../../common/formSelect/FormSelect";
import FormDatePicker from "../../../common/formDatePicker/FormDatePicker";

const options = [
  { value: "monthly", label: "Monthly" },
  { value: "quarterly", label: "Quarterly" },
  { value: "semi-annualy", label: "Semi-annually" },
  { value: "annualy", label: "Annually" },
];

function HomeOwnerServicePlan({
    setServiceChargePlan,
    setServiceCharge,
    setStartDate,
    handleContinue,
    serviceChargePlan,
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
      serviceCharge: Yup.string().required("Please select a service charge"),
      startDate: Yup.date().required("Please enter a start date"),
    });
  
    return (
      <div className="tenantServicePlanForm">
        <Formik
          initialValues={{
            serviceChargePlan: serviceChargePlan,
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
             <FormInput
                label="Service charge*"
                placeholder="Enter service charge"
                value={values.serviceCharge}
                onChange={handleChange("serviceCharge")}
                error={touched.serviceCharge && errors.serviceCharge}
                type="number"
              />
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
              <FormDatePicker
                label="Payment Start Date*"
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
                    !errors.serviceCharge &&
                    !errors.startDate
                  ) {
                    setServiceChargePlan(values.serviceChargePlan);
                    setServiceCharge(values.serviceCharge);
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

export default HomeOwnerServicePlan