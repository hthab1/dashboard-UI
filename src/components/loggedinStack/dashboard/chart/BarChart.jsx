import React, { useState } from "react";
import "./BarChart.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import Toggle from "../toggle/Toggle";
import { NumberFormat } from "../../../functions/Format";
import { Bar } from "react-chartjs-2";
import {  barChart} from "../../../../data/barChart"
import BarChartComponent from "./BarChartComponent";
// import { Chart as ChartJS } from "chart.js/auto"

function BarChart({ data }) {
  const [numberToggle, setNumberToggle] = useState(false);


  return (
    <div className="barChart">
      <div className="barChartContent">
        <div className="barChartContentHeader">
          <div className="barChartHeaderLeft">Bar Chart</div>
          <div className="barChartHeaderRight">
            <span className="barChartNum">Number</span>
            <span
              className="barChartToggle"
              onClick={() => setNumberToggle(!numberToggle)}
            >
              <Toggle toggle={numberToggle} />
            </span>
            <span className="barChartDots">
              <BsThreeDotsVertical />
            </span>
          </div>
        </div>
        <div className="barChartInfo">
          <div className="barChartInfoCircle"></div>
          <div className="barChartInfoTitle">Sold</div>
          <div className="barChartInfoNum">{NumberFormat(569)}</div>
          <div className="barChartInfoCircle barChartInfoCircleBlue"></div>
          <div className="barChartInfoTitle">Rent</div>
          <div className="barChartInfoNum">{NumberFormat(1567)}</div>
        </div>
        <div className="barChartChart">
            <BarChartComponent barData={data} />
        </div>
      </div>
    </div>
  );
}

export default BarChart;
