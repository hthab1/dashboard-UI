import React, { useEffect, useState } from "react";
import Header from "../../../../../components/loggedinStack/Header";
import Steps from "../../../../../components/loggedinStack/users/common/steps/Steps";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setHomeOwnerServicePlan } from "../../../../../reducers/homeOwnerReducer";
import HomeOwnerServicePlan from "../../../../../components/loggedinStack/users/homeOwners/homeOwnerServicePlan/HomeOwnerServicePlan";
import { setActiveTab } from "../../../../../reducers/sidebarReducer";

function SetHomeOwnerServiceCharge() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const servicePlan = useSelector((state) => state.homeOwner.homeOwnerServicePlan);

  const [serviceChargePlan, setServiceChargePlan] = useState("");
  const [serviceCharge, setServiceCharge] = useState("");
  const [startDate, setStartDate] = useState(servicePlan.startDate);

  useEffect(()=>{
    dispatch(setActiveTab("home owners"))
  },[])

  const handleContinue = (e) => {
    dispatch(
      setHomeOwnerServicePlan({
        serviceChargePlan,
        serviceCharge,
        startDate
      })
    );
    navigate("/users/homeOwners/addHomeOwnerConfirmation");
  };

  return (
    <div className="loadedPage setServiceCharge">
      <Header pageName="Set Service Charge" />
      <div className="board">
        <div className="boardContent">
          <div className="setServiceChargeStepContaienr">
            <Steps stage={3} />
          </div>
          <div className="setServiceChargeFormcontainer globalFormContainer">
            <HomeOwnerServicePlan
              serviceChargePlan={servicePlan.serviceChargePlan}
              serviceCharge={servicePlan.serviceCharge}
              startDate={servicePlan.startDate}
              setServiceChargePlan={setServiceChargePlan}
              setServiceCharge={setServiceCharge}
              setStartDate={setStartDate}
              handleContinue={handleContinue}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetHomeOwnerServiceCharge;
