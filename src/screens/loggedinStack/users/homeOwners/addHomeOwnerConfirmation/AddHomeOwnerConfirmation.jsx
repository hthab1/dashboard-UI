import React, { useState } from "react";
import "./AddHomeOwnerConfirmation.css"
import Header from "../../../../../components/loggedinStack/Header";
import Steps from "../../../../../components/loggedinStack/users/common/steps/Steps";
import HomeOwnerConfirmation from "../../../../../components/loggedinStack/users/homeOwners/homeOwnerConfirmation/HomeOwnerConfirmation"
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MoneyFormat } from "../../../../../components/functions/Format";

function AddHomeOwnerConfirmation() {
    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.homeOwner.homeOwnerPersonalInfo);
    const propertyInfo = useSelector((state) => state.homeOwner.homeOwnerPropertyInfo);
    const servicePlan = useSelector((state) => state.homeOwner.homeOwnerServicePlan);
  
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
        title: "Service Charge",
        value: `${MoneyFormat(servicePlan?.serviceCharge)}`,
      },
      {
        title: "Start Date",
        value: getDate(servicePlan?.startDate),
      },
    ];
  
    
  
    return (
      <div className="loadedPage addHomeOwnerConfirmation">
        <Header pageName="Confirmation" />
        <div className="board">
          <div className="boardContent">
            <div className="addHomeOwnerConfirmationStepContaienr">
              <Steps stage={4} />
            </div>
            <div className="addHomeOwnerConfirmationFormcontainer">
              <HomeOwnerConfirmation
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

export default AddHomeOwnerConfirmation