import React from "react";
import "./AddSubscriberConfirmation.css";
import Header from "../../../../../components/loggedinStack/Header";
import Steps from "../../../../../components/loggedinStack/users/common/steps/Steps";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MoneyFormat } from "../../../../../components/functions/Format";
import SubscriberConfirmation from "../../../../../components/loggedinStack/users/subscribers/subscriberConfirmation/SubscriberConfirmation";

function AddSubscriberConfirmation() {
  const navigate = useNavigate();
  const personalInfo = useSelector((state) => state.subscriber.personalInfo);
  const propertyInfo = useSelector((state) => state.subscriber.propertyInfo);
  const servicePlan = useSelector((state) => state.subscriber.servicePlan);

  const getDate = (date) => {
    let timeStamp = new Date(date);

    return timeStamp.toLocaleDateString();
  };

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
      title: "Amount",
      value: `${MoneyFormat(servicePlan?.amount)}`,
    },
    {
      title: "Start Date",
      value: getDate(servicePlan?.startDate),
    },
    {
      title: "Due Date",
      value: getDate(servicePlan?.dueDate),
    },
  ];

  return (
    <div className="loadedPage addSubscriberConfirmation">
      <Header pageName="Confirmation" />
      <div className="board">
        <div className="boardContent">
          <div className="addSubscriberConfirmationStepContaienr">
            <Steps stage={4} />
          </div>
          <div className="addSubscriberConfirmationFormcontainer">
            <SubscriberConfirmation
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

export default AddSubscriberConfirmation;
