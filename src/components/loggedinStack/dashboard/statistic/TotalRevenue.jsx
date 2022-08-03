import React, { useState } from "react";
import "./TotalRevenue.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MoneyFormat } from "../../../functions/Format";
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";
import { revenue } from "../../../../data/totalRevenue";

function TotalRevenue() {
  const [active, setActive] = useState("monthly");
  const increment = 0.1;
  const data = revenue;

  const maxAmount = data?.reduce(function (prev, current) {
    return prev.amount > current.amount ? prev : current;
  })?.amount;

  const total = data.reduce((total, value) => (total += value.amount), 0);

  return (
    <div className="revenue">
      <div className="revenueContent">
        <div className="revenueContentHeader">
          <div className="revenueHeaderLeft">Total Revenue</div>
          <div className="revenueHeaderRight">
            <div className="revenueChoice" onClick={() => setActive("daily")}>
              <span style={{ color: active === "daily" && " #00695E" }}>
                Daily
              </span>
              <div
                className="revenueChoiceBorder"
                style={{ height: active === "daily" && 5 }}
              ></div>
            </div>
            <div className="revenueChoice" onClick={() => setActive("weekly")}>
              <span style={{ color: active === "weekly" && " #00695E" }}>
                Weekly
              </span>
              <div
                className="revenueChoiceBorder"
                style={{ height: active === "weekly" && 5 }}
              ></div>
            </div>
            <div className="revenueChoice" onClick={() => setActive("monthly")}>
              <span style={{ color: active === "monthly" && " #00695E" }}>
                Monthly
              </span>
              <div
                className="revenueChoiceBorder"
                style={{ height: active === "monthly" && 5 }}
              ></div>
            </div>

            <span className="revenueDots">
              <BsThreeDotsVertical />
            </span>
          </div>
        </div>
        <div className="revenueAmountContainer">
          <div className="revenueAmount">{MoneyFormat(total)}</div>
          <div className="revenueAmountIncrement">
            <div
              className="revenueIncrementIcon"
              style={{ color: increment >= 0 ? "#09BD3C" : "#ff5274" }}
            >
              {increment >= 0 ? (
                <BsFillArrowUpCircleFill />
              ) : (
                <BsFillArrowDownCircleFill />
              )}
            </div>
            <div className="revenueIncrementInfo">
              <span
                className="revenueIncrementPercent"
                style={{ color: increment >= 0 ? "#09BD3C" : "#ff5274" }}
              >{`${Math.abs(increment)}%`}</span>
              <span className="revenueIncrementLast">than last week</span>
            </div>
          </div>
        </div>
        <div className="revenueChart">
          {data.map((value, index) => {
            let percent;
            percent = (value.amount / maxAmount) * 0.9;
            return (
              <div
                key={index}
                className="revenueChartBarContainer"
                style={{ zIndex: data.length - index }}
              >
                <div className="revenueChartBar">
                  <div className="revenueChartBarOff"></div>
                  <div
                    className="revenueChartBarOn"
                    style={{ height: 130 * percent }}
                  ></div>
                  <div className="revenuChartBarInfo">
                    {MoneyFormat(value.amount)}
                  </div>
                </div>
                <div className="revenueChartNum">{value.day}</div>
              </div>
            );
          })}
          <div className="revenueChartPadding"></div>
        </div>
      </div>
    </div>
  );
}

export default TotalRevenue;
