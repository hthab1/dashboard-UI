import React from "react";
import "./HomeOwnerConfirmation.css";
import Confirmation from "../../common/confirmation/Confirmation";
import { useNavigate } from "react-router-dom";
import ConfirmationSubmit from "../../common/confirmation/ConfirmationSubmit";

function HomeOwnerConfirmation({
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
        onEdit={() => navigate("/users/homeOwners/addHomeOwner")}
      />
      <Confirmation
        label="Property Information"
        details={propertyInformation}
        onEdit={() => navigate("/users/homeOwners/assignHomeOwnerProperty")}
      />
      <Confirmation
        label="Service Charge"
        details={serviceCharge}
        onEdit={() => navigate("/users/homeOwners/setHomeOwnerServiceCharge")}
      />
      <ConfirmationSubmit
        backLabel="Back"
        continueLabel="Add Home Owner"
        onBack={onBack}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default HomeOwnerConfirmation;
