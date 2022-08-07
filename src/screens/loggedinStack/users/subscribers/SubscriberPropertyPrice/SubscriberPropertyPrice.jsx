import React, { useState } from "react";
import "./SubscriberPropertyPrice.css"
import Header from "../../../../../components/loggedinStack/Header";
import Steps from "../../../../../components/loggedinStack/users/common/steps/Steps";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SubscriberPrice from "../../../../../components/loggedinStack/users/subscribers/subscriberPrice/SubscriberPrice";
import { setSubscriberServicePlan } from "../../../../../reducers/subscriberReducer";

function SubscriberPropertyPrice() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const servicePlan = useSelector((state) => state.subscriber.servicePlan);

    const [serviceChargePlan, setServiceChargePlan] = useState("");
    const [amount, setAmount] = useState("");
    const [startDate, setStartDate] = useState(servicePlan.startDate);
    const [dueDate, setDueDate] = useState(servicePlan.dueDate);
  
    const handleContinue = (e) => {
      dispatch(
        setSubscriberServicePlan({
          serviceChargePlan,
          amount,
          startDate,
          dueDate
        })
      );
      navigate("/users/subscribers/addSubscriberConfirmation");
    };
  
    return (
      <div className="loadedPage subscriberProperty">
        <Header pageName="Set Service Charge" />
        <div className="board">
          <div className="boardContent">
            <div className="subscriberPropertyStepContaienr">
              <Steps stage={3} />
            </div>
            <div className="subscriberPropertyFormcontainer globalFormContainer">
              <SubscriberPrice
                serviceChargePlan={servicePlan.serviceChargePlan}
                amount={servicePlan.amount}
                startDate={servicePlan.startDate}
                dueDate={servicePlan.dueDate}
                setServiceChargePlan={setServiceChargePlan}
                setAmount={setAmount}
                setStartDate={setStartDate}
                setDueDate={setDueDate}
                handleContinue={handleContinue}
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default SubscriberPropertyPrice