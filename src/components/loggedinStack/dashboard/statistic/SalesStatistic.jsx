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
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "April",
    Sales: 4000,
  },
  {
    name: "May",
    Sales: 3000,
  },
  {
    name: "June",
    Sales: 2000,
  },
  {
    name: "July",
    Sales: 2780,
  },
  {
    name: "Aug",
    Sales: 1890,
  },
  {
    name: "Sep",
    Sales: 2390,
  },
  {
    name: "oct",
    Sales: 3490,
  },
];

function SalesStatistic() {
  const [active, setActive] = useState("monthly");

  const DataFormater = (number) => {
    if (number > 1000000000) {
      return (number / 1000000000).toString() + "B";
    } else if (number > 1000000) {
      return (number / 1000000).toString() + "M";
    } else if (number > 1000) {
      return (number / 1000).toString() + "K";
    } else {
      return number.toString();
    }
  };

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
        <div className="rentStatisticsChart">
          <ResponsiveContainer
            height={290}
            width="100%"
            className="rentStatisticsChartChart"
          >
            <LineChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                padding={{
                  left: 20,
                }}
              />
              <YAxis tickFormatter={DataFormater} />
              <Tooltip />
              
              <Line
                fill="rgba(33, 111, 237, 0.2)"
                type="monotone"
                dataKey="Sales"
                stroke="#2251F8"
                strokeWidth={8}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default SalesStatistic;
