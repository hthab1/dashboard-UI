import React from "react";
import "./PercentageCard.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { NumberFormat } from "../../../../components/functions/Format";

function PercentageCard({ background, number, name, pathColor, percentage }) {
  return (
    <div
      className="percentageCard"
      style={{
        background: background && background,
        color: background && "#ffffff",
      }}
    >
      <div className="percentageCardContent">
        <div className="percentageCardContentLeft">
          <span className="percentageCardNumber">{NumberFormat(number)}</span>
          <span className="percentageCardName">{name}</span>
        </div>
        <div className="percentageCardProgress">
          <CircularProgressbar
            value={percentage}
            strokeWidth={25}
            styles={buildStyles({
              strokeLinecap: "butt",
              trailColor: background ? "#ffffff33" : "#EEEEEE",
              pathColor: pathColor ? pathColor : "#ffffff",
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default PercentageCard;
