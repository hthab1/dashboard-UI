import React, { useEffect, useState } from "react";
import "./SetServiceCharge.css";
import Header from "../../../../../components/loggedinStack/Header";
import Steps from "../../../../../components/loggedinStack/users/common/steps/Steps";
import { useNavigate } from "react-router-dom";
import TenantServicePlanForm from "../../../../../components/loggedinStack/users/common/tenantServicePlanForm/TenantServicePlanForm";
import { useSelector, useDispatch } from "react-redux";
import { setServicePlan } from "../../../../../reducers/tenantReducer";
import { setActiveTab } from "../../../../../reducers/sidebarReducer";

function SetServiceCharge() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const servicePlan = useSelector((state) => state.tenant.servicePlan);

  const [serviceChargePlan, setServiceChargePlan] = useState("");
  const [rentalFee, setRentalFee] = useState("");
  const [serviceCharge, setServiceCharge] = useState("");
  const [startDate, setStartDate] = useState(servicePlan.startDate);

  useEffect(()=>{
    dispatch(setActiveTab("tenants"))
  },[])

  const handleContinue = (e) => {
    dispatch(
      setServicePlan({
        serviceChargePlan,
        rentalFee,
        serviceCharge,
        startDate
      })
    );
    navigate("/users/tenants/addTenantConfirmation");
  };

  return (
    <div className="loadedPage setServiceCharge">
      <Header pageName="Set Service Charge" />
      <div className="board">
        <div className="boardContent">
          <div className="setServiceChargeStepContaienr">
            <Steps stage={3} />
          </div>
          <div className="setServiceChargeFormcontainer">
            <TenantServicePlanForm
              serviceChargePlan={servicePlan.serviceChargePlan}
              rentalFee={servicePlan.rentalFee}
              serviceCharge={servicePlan.serviceCharge}
              startDate={servicePlan.startDate}
              setServiceChargePlan={setServiceChargePlan}
              setRentalFee={setRentalFee}
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

export default SetServiceCharge;
