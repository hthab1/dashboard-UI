import React, { useState } from "react";
import "./SalesStatistic.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
  
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];

 
function SalesStatistic() {
  const [active, setActive] = useState("monthly");

//   const data = {
//     labels: [
//       "15-Jan",
//       "15-Feb",
//       "15-Mar",
//       "15-Apr",
//       "15-May",
//       "15-Jun",
//       "15-Jul",
//       "15-Aug",
//       "15-Sep",
//       "15-Oct",
//       "15-Nov",
//       "15-Dec"
//     ],
//     datasets: [
//       {
//         label: "Visit",
//         fill: false,
//         lineTension: 0,
//         backgroundColor: "rgba(131,138,133,0.4)",
//         borderColor: "rgba(131,138,133,1)",
//         borderCapStyle: "butt",
//         borderDash: [],
//         borderDashOffset: 0.0,
//         borderJoinStyle: "miter",
//         pointBorderColor: "rgba(131,138,133,1)",
//         pointBackgroundColor: "#fff",
//         pointBorderWidth: 2,
//         pointHoverRadius: 5,
//         pointHoverBackgroundColor: "rgba(131,138,133,1)",
//         pointHoverBorderColor: "rgba(220,220,220,1)",
//         pointHoverBorderWidth: 2,
//         pointRadius: 1,
//         pointHitRadius: 10,
//         data: [100, 80, 130, 125, 150, 200, 190, 210, 170, 190, 220, 200]
//       },
//     ]
//   };
  
//   const options = {
//     title: {
//       display: true,
//       text: "Visit with & without Seasonal Impacts",
//       fontSize: 20
//     },
//     legend: {
//       display: false,
//       position: "bottom"
//     },
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             callback: function(value, index, values) {
//               return value + "K";
//             }
//           }
//         }
//       ]
//     }
//   };

  return (
    <div className="salesStatistic">
      <div className="salesStatisticsContent">
        <div className="salesStatisticsContentHeader">
          <div className="salesStatisticsHeaderLeft">Sales Statistics</div>
          <div className="salesStatisticsHeaderRight">
            <div
              className="salesStatisticsChoice"
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
              className="salesStatisticsChoice"
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
              className="salesStatisticsChoice"
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

            <span className="salesStatisticsDots">
              <BsThreeDotsVertical />
            </span>
          </div>
        </div>
        <div className="salesStatisticsChart">
        <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
        </div>
      </div>
    </div>
  );
}

export default SalesStatistic;
