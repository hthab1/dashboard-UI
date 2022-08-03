import React, { useState } from "react";
import "./RentStatistic.css";
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
    Rent: 4000,
  },
  {
    name: "May",
    Rent: 3000,
  },
  {
    name: "June",
    Rent: 2000,
  },
  {
    name: "July",
    Rent: 2780,
  },
  {
    name: "Aug",
    Rent: 1890,
  },
  {
    name: "Sep",
    Rent: 2390,
  },
  {
    name: "oct",
    Rent: 3490,
  },
];


function RentStatistic() {
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
                fill="rgba(50, 209, 109, 0.2)"
                type="monotone"
                dataKey="Rent"
                stroke="#32D16D"
                strokeWidth={8}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default RentStatistic;
