import React from "react";
import Confirmation from "../../common/confirmation/Confirmation";
import "./TenantConfirmation.css";
import { useNavigate } from "react-router-dom";
import ConfirmationSubmit from "../../common/confirmation/ConfirmationSubmit";

function TenantConfirmation({ personalInformation, propertyInformation, serviceCharge, onBack, onSubmit }) {
  const navigate = useNavigate();

  return (
    <div className="tenantConfirmation">
      <Confirmation
        label="Personal Information"
        details={personalInformation}
        onEdit={() => navigate("/users/tenants/addTenant")}
      />
      <Confirmation
        label="Property Information"
        details={propertyInformation}
        onEdit={() => navigate("/users/tenants/assignProperty")}
      />
      <Confirmation
        label="Service Charge"
        details={serviceCharge}
        onEdit={() => navigate("/users/tenants/setServiceCharge")}
      />
      <ConfirmationSubmit backLabel="Back" continueLabel="Add Tenant" onBack={onBack} onSubmit={onSubmit} />
    </div>
  );
}

export default TenantConfirmation;
