import React from "react";
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

function SubscriberPrice({
  setServiceChargePlan,
  setAmount,
  setStartDate,
  setDueDate,
  handleContinue,
  serviceChargePlan,
  amount,
  startDate,
  dueDate,
}) {
  let date = new Date();

  const getDate = (date) => {
    let timeStamp = new Date(date);

    return timeStamp.toLocaleDateString();
  };

  const validationSchema = Yup.object().shape({
    serviceChargePlan: Yup.string().required(
      "Please select a servcie charge plan"
    ),
    amount: Yup.string().required("Please enter an amount"),
    startDate: Yup.date().required("Please select a start date"),
    dueDate: Yup.date().required("Please select a Due date"),
  });

  return (
    <div className="tenantServicePlanForm">
      <Formik
        initialValues={{
          serviceChargePlan: serviceChargePlan,
          amount: amount,
          startDate: startDate,
          dueDate: dueDate,
        }}
        onSubmit={() => {
          handleContinue();
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
              label="Amount*"
              placeholder="Enter the amount"
              value={values.amount}
              onChange={handleChange("amount")}
              error={touched.amount && errors.amount}
              type="number"
            />
            <FormSelect
              options={options}
              placeholder="Please select a payment plan"
              label="payment Plan*"
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
              value={
                values.startDate
                  ? getDate(values.startDate)
                  : parseInt(values.startDate)
              }
              onChange={(date) => setFieldValue("startDate", date)}
              error={touched.startDate && errors.startDate}
            />
            <FormDatePicker
              label="Payment Due Date*"
              placeholder="Select due date"
              // startDate={date}
              value={
                values.dueDate
                  ? getDate(values.dueDate)
                  : parseInt(values.dueDate)
              }
              onChange={(date) => setFieldValue("dueDate", date)}
              error={touched.dueDate && errors.dueDate}
            />
            <FormButton
              label="Continue"
              onClick={() => {
                if (
                  !errors.serviceChargePlan &&
                  !errors.amount &&
                  !errors.startDate &&
                  !errors.dueDate
                ) {
                  setServiceChargePlan(values.serviceChargePlan);
                  setAmount(values.amount);
                  setStartDate(getDate(values.startDate));
                  setDueDate(getDate(values.dueDate));
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

export default SubscriberPrice;
