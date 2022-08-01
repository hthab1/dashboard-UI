import React, { useEffect, useState } from "react";
import { barChart } from "../../../../data/barChart";
import "./BarChartComponent.css";

function BarChartComponent({ barData}) {
  const [data, setData] = useState(barData);
  const [interval, setIterval] = useState([]);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      setInterval([]);
      setData(barData)
    if(data?.length > 0){

        const maxRent = data?.reduce(function (prev, current) {
            return prev.rent > current.rent ? prev : current;
          })?.rent;
        
          const maxSale = data?.reduce(function (prev, current) {
            return prev.sold > current.sold ? prev : current;
          })?.sold;
        
          const intervalMax = maxRent > maxSale ? maxRent : maxSale ;
        
          const intervalCount = Math.floor(intervalMax / 20);
        
          let num = intervalCount * 20;
        
          for (let index = 0; index < intervalCount + 1; index++) {
            if (interval.length < intervalCount + 1) {
              interval.push(num);
              num -= 20;
            }
          }
        }

    }
    return () => {
      isSubscribed = false;
    };
  }, [interval, data]);



  return (
    <div className="bar">
      <div className="barIntervalContainer">
        {interval.map((value, index) => (
          <div key={index} className="barIntervalNumber">
            {value}
          </div>
        ))}
      </div>
      <div className="barIntervalBorderContainer">
        {interval.map((value, index) => (
          <span key={index} className="barIntervalNumberBorder"></span>
        ))}
      </div>
      <div className="barChartBars">
        {
            data.map((bar, index) => (

        <div key={index} className="barChartBarContainer">
          <div className="barChartBarsLayout">
            <div className="barChartBar1" style={{ height: bar.sold * 2 }}>
                <div className="barChartInfo">
                    <span>Sold</span>
                    <span>{bar.sold}</span>
                </div>
            </div>
            <div className="barChartBar2" style={{ height: bar.rent * 2 }}>
            <div className="barChartInfo2">
                    <span>Rent</span>
                    <span>{bar.rent}</span>
                </div>
            </div>
          </div>
          <span className="barChartBarLabel">{bar.week}</span>
        </div>
            ) )
        }
        
      </div>
    </div>
  );
}

export default BarChartComponent;
