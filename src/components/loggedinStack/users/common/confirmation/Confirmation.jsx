import React from "react";
import "./Confirmation.css";
import { MdOutlineEdit } from "react-icons/md";

function Confirmation({ details, label, onEdit  }) {


  return (
    <div className="confirmation">
      <label className="confirmationLabel">{label}</label>
      <div className="confirmationContentContainer">
        <div className="confirmationContent">
          <div className="confirmationContentContent">
            {details?.map((segment, index) => (
              <div key={index} className="confirmationContentRow">
                <div className="confirmationContentRowTitle">
                  {segment.title}
                </div>
                <div className="confirmationContentRowInfo">
                  {segment.value}
                </div>
              </div>
            ))}
          </div>
          <div className="confirmationContentEdit" onClick={onEdit}>
            <MdOutlineEdit />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
