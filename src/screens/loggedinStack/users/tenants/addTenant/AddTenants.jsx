import React, { useEffect, useState } from "react";
import Header from "../../../../../components/loggedinStack/Header";
import AddForm from "../../../../../components/loggedinStack/users/common/addForm/AddForm";
import Steps from "../../../../../components/loggedinStack/users/common/steps/Steps";
import "./AddTenants.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPersonalInfo } from "../../../../../reducers/tenantReducer";
import { setActiveTab } from "../../../../../reducers/sidebarReducer";

function AddTenants() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const personalInfo = useSelector((state) => state.tenant.personalInfo);
  const propertyInfo = useSelector((state) => state.tenant.propertyInfo);
  const servicePlan = useSelector((state) => state.tenant.servicePlan);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(()=>{
    dispatch(setActiveTab("tenants"))
  },[])

  const handleAdd = (e) => {
    dispatch(
      setPersonalInfo({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
      })
    );
    if (propertyInfo.estate) {
      if (servicePlan.serviceCharge) {
        navigate("/users/tenants/addTenantConfirmation");
      } else {
        navigate("/users/tenants/setServiceCharge");
      }
    } else {
      navigate("/users/tenants/assignProperty");
    }
  };

  return (
    <div className="loadedPage addTenant">
      <Header pageName="Add Tenant" />
      <div className="board">
        <div className="boardContent">
          <div className="addTenantsStepContaienr">
            <Steps stage={1} />
          </div>
          <div className="addTenantFormcontainer">
            <AddForm
              firstName={personalInfo.firstName}
              lastName={personalInfo.lastName}
              email={personalInfo.email}
              phone={personalInfo.phone}
              setFirstName={setFirstName}
              setLastName={setLastName}
              setEmail={setEmail}
              setPhone={setPhone}
              handleAdd={handleAdd}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTenants;
