import React, { useState } from "react";
import "./Summary.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RadialBarChart, RadialBar } from "recharts";
import { MoneyFormat } from "../../../functions/Format";

function Summary() {
  const [active, setActive] = useState("monthly");

  const data = [
    {
      name: "D",
      x: 212241,
      fill: "#F43D3D",
    },
    {
      name: "C",
      x: 872332,
      fill: "#32D16D",
    },
    {
      name: "B",
      x: 971271,
      fill: "#FF8723",
    },
    {
      name: "A",
      x: 638762,
      fill: "#2251F8",
    },
  ];

  return (
    <div className="summary">
      <div className="summaryContent">
        <div className="summaryContentHeader">
          <div className="summaryHeaderLeft">Sales Summary</div>
          <div className="summaryHeaderRight">
            <div className="summaryChoice" onClick={() => setActive("daily")}>
              <span style={{ color: active === "daily" && " #00695E" }}>
                Daily
              </span>
              <div
                className="summaryChoiceBorder"
                style={{ height: active === "daily" && 5 }}
              ></div>
            </div>
            <div className="summaryChoice" onClick={() => setActive("weekly")}>
              <span style={{ color: active === "weekly" && " #00695E" }}>
                Weekly
              </span>
              <div
                className="summaryChoiceBorder"
                style={{ height: active === "weekly" && 5 }}
              ></div>
            </div>
            <div className="summaryChoice" onClick={() => setActive("monthly")}>
              <span style={{ color: active === "monthly" && " #00695E" }}>
                Monthly
              </span>
              <div
                className="summaryChoiceBorder"
                style={{ height: active === "monthly" && 5 }}
              ></div>
            </div>

            <span className="summaryDots">
              <BsThreeDotsVertical />
            </span>
          </div>
        </div>
        <div className="summaryChartContainer">
          <div className="summaryChart">
            <RadialBarChart
              width={300}
              height={300}
              data={data}
              innerRadius="20%"
              outerRadius="70%"
              barSize={10}
            >
              <RadialBar
                cornerRadius={30}
                minAngle={30}
                dataKey="x"
                clockWise
              />
            </RadialBarChart>
          </div>
          <div className="summaryChartInfo">
            <div className="summaryInfo">
                <div className="summaryInfoLeft"></div>
                <div className="summaryInfoRight">
                    <span className="summaryInfoRightTop">{MoneyFormat(654231)}</span>
                    <span className="summaryInfoRightBottom">Property Sold</span>
                </div>
            </div>
            <div className="summaryInfo">
                <div className="summaryInfoLeft"></div>
                <div className="summaryInfoRight">
                    <span className="summaryInfoRightTop">{MoneyFormat(971251)}</span>
                    <span className="summaryInfoRightBottom">Income</span>
                </div>
            </div>
            <div className="summaryInfo">
                <div className="summaryInfoLeft"></div>
                <div className="summaryInfoRight">
                    <span className="summaryInfoRightTop">{MoneyFormat(872335)}</span>
                    <span className="summaryInfoRightBottom">Expense</span>
                </div>
            </div>
            <div className="summaryInfo">
                <div className="summaryInfoLeft"></div>
                <div className="summaryInfoRight">
                    <span className="summaryInfoRightTop">{MoneyFormat(212244)}</span>
                    <span className="summaryInfoRightBottom">Property Rented</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
