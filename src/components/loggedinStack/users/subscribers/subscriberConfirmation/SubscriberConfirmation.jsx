import React from "react";
import "./SubscriberConfirmation.css";
import Confirmation from "../../common/confirmation/Confirmation";
import { useNavigate } from "react-router-dom";
import ConfirmationSubmit from "../../common/confirmation/ConfirmationSubmit";

function SubscriberConfirmation({
  personalInformation,
  propertyInformation,
  serviceCharge,
  onBack,
  onSubmit,
}) {
  const navigate = useNavigate();

  return (
    <div className="homeOwnerConfirmation">
      <Confirmation
        label="Personal Information"
        details={personalInformation}
        onEdit={() => navigate("/users/subscribers/addSubscriber")}
      />
      <Confirmation
        label="Property Information"
        details={propertyInformation}
        onEdit={() => navigate("/users/subscribers/assignSubscriberProperty")}
      />
      <Confirmation
        label="Service Charge"
        details={serviceCharge}
        onEdit={() => navigate("/users/subscribers/setSubscriberPropertyPrice")}
      />
      <ConfirmationSubmit
        backLabel="Back"
        continueLabel="Add Subscriber"
        onBack={onBack}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default SubscriberConfirmation;
