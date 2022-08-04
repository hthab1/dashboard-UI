import React from "react";
import "./ConfirmationSubmit.css";

function ConfirmationSubmit({ backLabel, continueLabel, onBack, onSubmit }) {
  return (
    <div className="confirmationSubmit">
      <div
        className="confirmationSubmitButton confirmationSubmitBack"
        onClick={onBack}
      >
        {backLabel}
      </div>
      <div className="confirmationSubmitButton" onClick={onSubmit}>
        {continueLabel}
      </div>
    </div>
  );
}

export default ConfirmationSubmit;
