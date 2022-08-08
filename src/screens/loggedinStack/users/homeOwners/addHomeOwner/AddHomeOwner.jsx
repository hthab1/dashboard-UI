import React, { useEffect, useState } from "react";
import Header from "../../../../../components/loggedinStack/Header";
import AddForm from "../../../../../components/loggedinStack/users/common/addForm/AddForm";
import Steps from "../../../../../components/loggedinStack/users/common/steps/Steps";
import "./AddHomeOwner.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setHomeOwnerPersonalInfo } from "../../../../../reducers/homeOwnerReducer";
import { setActiveTab } from "../../../../../reducers/sidebarReducer";

function AddHomeOwner() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const personalInfo = useSelector(
    (state) => state.homeOwner.homeOwnerPersonalInfo
  );
  const propertyInfo = useSelector(
    (state) => state.homeOwner.homeOwnerPropertyInfo
  );
  const servicePlan = useSelector(
    (state) => state.homeOwner.homeOwnerServicePlan
  );

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(()=>{
    dispatch(setActiveTab("home owners"))
  },[])
  
  const handleAdd = (e) => {
    dispatch(
      setHomeOwnerPersonalInfo({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
      })
    );
    if (propertyInfo.estate) {
      if (servicePlan.serviceCharge) {
        navigate("/users/homeOwners/addHomeOwnerConfirmation");
      } else {
        navigate("/users/homeOwners/setHomeOwnerServiceCharge");
      }
    } else {
      navigate("/users/homeOwners/assignHomeOwnerProperty");
    }
  };

  return (
    <div className="loadedPage addHomeOwner">
      <Header pageName="Add Home Owner" />
      <div className="board">
        <div className="boardContent">
          <div className="addHomeOwnerStepContaienr">
            <Steps stage={1} />
          </div>
          <div className="addHomeOwnerFormcontainer">
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

export default AddHomeOwner;
