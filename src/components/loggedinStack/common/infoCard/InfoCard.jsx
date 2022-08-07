import React from "react";
import "./InfoCard.css";
import { BsPerson, BsCart3 } from "react-icons/bs";

function InfoCard({ title, value, icon }) {
  return (
    <div className="infoCard">
      <div className="infoContainer">
        <span className={icon ? "infoInfo" : "infoInfo infoInfoShow"}>
          {value}
        </span>
        <span className="infoTitle">{title}</span>
      </div>
      {icon === "person" && (
        <div className="infoCardIconContainer">
          <BsPerson />
        </div>
      )}
      {icon === "money" && (
        <div className="infoCardIconContainer">
          <BsCart3 />
        </div>
      )}
    </div>
  );
}

export default InfoCard;
