import React from "react";
import "./PercentageCardPercent.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { NumberFormat } from "../../../../components/functions/Format";

function PercentageCardPercent({ number, name, pathColor, percentage, target }) {
  return (
    <div
      className="percentageCardPercent"
    >
      <div className="percentageCardPercentContent">
        <div className="percentageCardPercentContentLeft">
          <span className="percentageCardPercentNumber">{NumberFormat(number)}</span>
          <span className="percentageCardPercentName">{name}</span>
          <span className="percentageCardPercentTarget">{target}</span>
        </div>
        <div className="percentageCardPercentProgress">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={8}
            styles={buildStyles({
              trailColor: "#EEEEEE",
              pathColor: pathColor ? pathColor : "#ffffff",
              textColor: pathColor,
              textSize:'24px',
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default PercentageCardPercent;
