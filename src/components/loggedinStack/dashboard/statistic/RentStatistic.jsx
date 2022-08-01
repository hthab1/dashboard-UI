import React, { useState } from "react";
import "./RentStatistic.css";
import { BsThreeDotsVertical } from "react-icons/bs";

function RentStatistic() {
  const [active, setActive] = useState("monthly");

  return (
    <div className="rentStatistic">
      <div className="rentStatisticsContent">
        <div className="rentStatisticsContentHeader">
          <div className="rentStatisticsHeaderLeft">Rent Statistics</div>
          <div className="rentStatisticsHeaderRight">
            <div
              className="rentStatisticsChoice"
              onClick={() => setActive("daily")}
            >
              <span style={{ color: active === "daily" && " #00695E" }}>
                Daily
              </span>
              <div
                className="salesChoiceBorder"
                style={{ height: active === "daily" && 5 }}
              ></div>
            </div>
            <div
              className="rentStatisticsChoice"
              onClick={() => setActive("weekly")}
            >
              <span style={{ color: active === "weekly" && " #00695E" }}>
                Weekly
              </span>
              <div
                className="salesChoiceBorder"
                style={{ height: active === "weekly" && 5 }}
              ></div>
            </div>
            <div
              className="rentStatisticsChoice"
              onClick={() => setActive("monthly")}
            >
              <span style={{ color: active === "monthly" && " #00695E" }}>
                Monthly
              </span>
              <div
                className="salesChoiceBorder"
                style={{ height: active === "monthly" && 5 }}
              ></div>
            </div>

            <span className="rentStatisticsDots">
              <BsThreeDotsVertical />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RentStatistic;
