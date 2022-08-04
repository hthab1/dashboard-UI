import React, { useState } from "react";
import Header from "../../../../../components/loggedinStack/Header";
import Steps from "../../../../../components/loggedinStack/users/common/steps/Steps";
import "./AddTenantConfirmation.css";
import { useNavigate } from "react-router-dom";
import TenantConfirmation from "../../../../../components/loggedinStack/users/tenants/tenantConfirmation/TenantConfirmation";
import { useSelector, useDispatch } from "react-redux";
import { MoneyFormat } from "../../../../../components/functions/Format";

function AddTenantConfirmation() {
  const navigate = useNavigate();
  const personalInfo = useSelector((state) => state.tenant.personalInfo);
  const propertyInfo = useSelector((state) => state.tenant.propertyInfo);
  const servicePlan = useSelector((state) => state.tenant.servicePlan);

  const getDate = (date) => {
    let timeStamp = new Date(date)

    return timeStamp.toLocaleDateString()
  }

  const personalInformation = [
    {
      title: "First Name",
      value: personalInfo?.firstName,
    },
    {
      title: "Last Name",
      value: personalInfo?.lastName,
    },
    {
      title: "Email ID",
      value: personalInfo?.email,
    },
    {
      title: "Phone No",
      value: personalInfo?.phone,
    },
  ];

  const propertyInformation = [
    {
      title: "Estate",
      value: propertyInfo?.estate,
    },
    {
      title: "Property",
      value: propertyInfo?.property,
    },
    {
      title: "Apartment",
      value: propertyInfo?.apartment,
    },
  ];

  const serviceCharge = [
    {
      title: "Payment Plan",
      value: servicePlan?.serviceChargePlan,
    },
    {
      title: "Rental Fee",
      value: `${MoneyFormat(servicePlan?.rentalFee)}`,
    },
    {
      title: "Service Charge",
      value: `${MoneyFormat(servicePlan?.serviceCharge)}`,
    },
    {
      title: "Start Date",
      value: getDate(servicePlan?.startDate),
    },
  ];

  

  return (
    <div className="loadedPage addTenantConfirmation">
      <Header pageName="Confirmation" />
      <div className="board">
        <div className="boardContent">
          <div className="addTenantConfirmationStepContaienr">
            <Steps stage={4} />
          </div>
          <div className="addTenantConfirmationFormcontainer">
            <TenantConfirmation
              personalInformation={personalInformation}
              propertyInformation={propertyInformation}
              serviceCharge={serviceCharge}
              onBack={() => navigate(-1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTenantConfirmation;
