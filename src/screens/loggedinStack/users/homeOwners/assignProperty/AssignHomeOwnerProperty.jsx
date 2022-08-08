import React, { useEffect, useState } from "react";
import "./AssignHomeOwnerProperty.css"
import Header from "../../../../../components/loggedinStack/Header";
import Steps from "../../../../../components/loggedinStack/users/common/steps/Steps";
import { useNavigate } from "react-router-dom";
import EstateForm from "../../../../../components/loggedinStack/users/common/estateForm/EstateForm";
import { useDispatch, useSelector } from "react-redux";
import { setHomeOwnerPropertyInfo } from "../../../../../reducers/homeOwnerReducer";
import { setActiveTab } from "../../../../../reducers/sidebarReducer";

function AssignHomeOwnerProperty() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const propertyInfo = useSelector((state) => state.homeOwner.homeOwnerPropertyInfo);
    const servicePlan = useSelector((state) => state.homeOwner.homeOwnerServicePlan);
  
    const [estate, setEstate] = useState("");
    const [property, setProperty] = useState("");
    const [apartment, setApartment] = useState("");

    useEffect(()=>{
      dispatch(setActiveTab("home owners"))
    },[])
  
    const handleContinue = (e) => {
      dispatch(
        setHomeOwnerPropertyInfo({
          estate: estate,
          property: property,
          apartment: apartment,
        })
      );
      if (servicePlan.serviceCharge) {
        navigate("/users/homeOwners/addHomeOwnerConfirmation");
      } else {
        navigate("/users/homeOwners/setHomeOwnerServiceCharge");
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
            <div className="assignPropertyFormcontainer globalFormContainer">
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

export default AssignHomeOwnerProperty