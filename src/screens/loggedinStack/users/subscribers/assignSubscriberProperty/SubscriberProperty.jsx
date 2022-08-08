import React, { useEffect, useState } from "react";
import "./SubscriberProperty.css";
import Header from "../../../../../components/loggedinStack/Header";
import Steps from "../../../../../components/loggedinStack/users/common/steps/Steps";
import { useNavigate } from "react-router-dom";
import EstateForm from "../../../../../components/loggedinStack/users/common/estateForm/EstateForm";
import { useDispatch, useSelector } from "react-redux";
import { setSubscriberPropertyInfo } from "../../../../../reducers/subscriberReducer";
import { setActiveTab } from "../../../../../reducers/sidebarReducer";

function SubscriberProperty() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const propertyInfo = useSelector((state) => state.subscriber.propertyInfo);
  const servicePlan = useSelector((state) => state.subscriber.servicePlan);

  const [estate, setEstate] = useState("");
  const [property, setProperty] = useState("");
  const [apartment, setApartment] = useState("");

  useEffect(()=>{
    dispatch(setActiveTab("subscribers"))
  },[])

  const handleContinue = (e) => {
    dispatch(
      setSubscriberPropertyInfo({
        estate: estate,
        property: property,
        apartment: apartment,
      })
    );
    if (servicePlan.amount) {
      navigate("/users/subscribers/addSubscriberConfirmation");
    } else {
      navigate("/users/subscribers/setSubscriberPropertyPrice");
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

export default SubscriberProperty;
