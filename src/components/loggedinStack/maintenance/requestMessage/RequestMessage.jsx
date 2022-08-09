import React from "react";
import { TimeFormat } from "../../../functions/Format";
import "./RequestMessage.css";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function RequestMessage({ staff, message, timestamp }) {
  let time = new Date(timestamp);
  let day = time.getDay();
  let date = time.getDate();
  day = day === 0 ? days[6] : days[day - 1];
  time = TimeFormat(timestamp);

  return <div className="requestMessage">
    <div className="requestMessageLeft">
        <span className="requestMessageDay">{day}</span>
        <span className="requestMessageDate">{date}</span>
    </div>
    <div className="requestMessageRight" style={{ borderLeftColor: staff && "#9DB1FF" }} >
        <div className="requestMessageMessage">{message}</div>
        <div className="requestMessageTime">{time}</div>
    </div>
  </div>;
}

export default RequestMessage;
