import React, { useState } from "react";
import Header from "../../../../../components/loggedinStack/Header";
import Steps from "../../../../../components/loggedinStack/users/common/steps/Steps";
import "./AssignProperty.css";
import { useNavigate } from "react-router-dom";
import EstateForm from "../../../../../components/loggedinStack/users/common/estateForm/EstateForm";
import { useDispatch, useSelector } from "react-redux";
import { setPropertyInfo } from "../../../../../reducers/tenantReducer";

function AssignProperty() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const propertyInfo = useSelector((state) => state.tenant.propertyInfo);
  const servicePlan = useSelector((state) => state.tenant.servicePlan);

  const [estate, setEstate] = useState("");
  const [property, setProperty] = useState("");
  const [apartment, setApartment] = useState("");

  const handleContinue = (e) => {
    dispatch(
      setPropertyInfo({
        estate: estate,
        property: property,
        apartment: apartment,
      })
    );
    if (servicePlan.serviceCharge) {
      navigate("/users/tenants/addTenantConfirmation");
    } else {
      navigate("/users/tenants/setServiceCharge");
    }
  };

  return (
    <div className="loadedPage assignProperty">
      <Header pageName="Assign Property" />
      <div className="board">
        <div className="boardContent">
          <div className="assignPropertyStepContaienr">
            <Steps stage={2} />
          </div>
          <div className="assignPropertyFormcontainer">
            <EstateForm
              estate={propertyInfo.estate}
              property={propertyInfo.property}
              apartment={propertyInfo.apartment}
              setEstate={setEstate}
              setProperty={setProperty}
              setApartment={setApartment}
              handleAdd={handleContinue}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignProperty;
