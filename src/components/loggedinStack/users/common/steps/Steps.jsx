import React from "react";
import "./Steps.css";

function Steps({ stage }) {
  return (
    <div className="steps">
      <div className="stepsContent">
        <div className="stepsStepContainer stepIndex1">
          <span className="stepsFirstStep stepsStepActive">01</span>
          <span className="stepsName stepsNameFirst stepsNameActive">
            Personal Information
          </span>
        </div>
        <div className="stepsStepContainer stepIndex2" style={{ zindex: 3 }}>
          <span
            className={stage > 1 ? "stepsStep stepsStepActive" : "stepsStep"}
          >
            02
          </span>
          <span
            className={stage > 1 ? "stepsName stepsNameActive" : "stepsName"}
          >
            Property Info
          </span>
        </div>
        <div className="stepsStepContainer stepIndex3" style={{ zindex: 2 }}>
          <span
            className={stage > 2 ? "stepsStep stepsStepActive" : "stepsStep"}
          >
            03
          </span>
          <span
            className={stage > 2 ? "stepsName stepsNameActive" : "stepsName"}
          >
            Service Plan
          </span>
        </div>
        <div className="stepsStepContainer stepIndex4 " style={{ zindex: 1 }}>
          <span
            className={stage > 3 ? "stepsStep stepsStepActive" : "stepsStep"}
          >
            04
          </span>
          <span
            className={stage > 3 ? "stepsName stepsNameActive" : "stepsName"}
          >
            Confirmation
          </span>
        </div>
      </div>
    </div>
  );
}

export default Steps;
