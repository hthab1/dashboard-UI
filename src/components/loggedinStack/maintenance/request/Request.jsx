import React from "react";
import { TimeFormat } from "../../../functions/Format";
import "./Request.css";

function Request({ id, name, timestamp, image, request, title, onClick }) {
  let time = new Date(parseInt(timestamp));

  return (
    <div className="request" onClick={onClick}>
      <div className="requestContainer">
        <img src={image} alt="" className="requestImage" />
        <div className="requestContentContainer">
          <div className="requestNameContainer">
            <span className="requestId">#{id}</span>
            <span className="requestName">{name}</span>
            <span className="requestTimestamp">
              Posted on {time.toLocaleDateString()},{" "}
              {TimeFormat(parseInt(timestamp))}{" "}
            </span>
          </div>
          <div className="requestRequestContainer">
            <div className="requestTitle">{title}</div>
            <div className="requestRequest">{request}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Request;
