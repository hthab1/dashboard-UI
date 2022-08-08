import React, { useEffect, useState } from "react";
import "./AddSubscriber.css";
import Header from "../../../../../components/loggedinStack/Header";
import AddForm from "../../../../../components/loggedinStack/users/common/addForm/AddForm";
import Steps from "../../../../../components/loggedinStack/users/common/steps/Steps";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSubscriberPersonalInfo } from "../../../../../reducers/subscriberReducer";
import { setActiveTab } from "../../../../../reducers/sidebarReducer";

function AddSubscriber() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const personalInfo = useSelector((state) => state.subscriber.personalInfo);
  const propertyInfo = useSelector((state) => state.subscriber.propertyInfo);
  const servicePlan = useSelector((state) => state.subscriber.servicePlan);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(()=>{
    dispatch(setActiveTab("subscribers"))
  },[])

  const handleAdd = (e) => {
    dispatch(
      setSubscriberPersonalInfo({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
      })
    );
    if (propertyInfo.estate) {
      if (servicePlan.amount) {
        navigate("/users/subscribers/addSubscriberConfirmation");
      } else {
        navigate("/users/subscribers/setSubscriberPropertyPrice");
      }
    } else {
      navigate("/users/subscribers/assignSubscriberProperty");
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
          <div className="addSubscriberFormcontainer globalFormContainer">
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

export default AddSubscriber;
