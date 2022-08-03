import React from "react";
import PercentageCard from "../../../components/loggedinStack/dashboard/cards/PercentageCard";
import PercentageCardPercent from "../../../components/loggedinStack/dashboard/cards/PercentageCardPercent";
import BarChart from "../../../components/loggedinStack/dashboard/chart/BarChart";
import RentStatistic from "../../../components/loggedinStack/dashboard/statistic/RentStatistic";
import SalesStatistic from "../../../components/loggedinStack/dashboard/statistic/SalesStatistic";
import Summary from "../../../components/loggedinStack/dashboard/statistic/Summary";
import TotalRevenue from "../../../components/loggedinStack/dashboard/statistic/TotalRevenue";
import Header from "../../../components/loggedinStack/Header";
import { barChart } from "../../../data/barChart";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Header pageName="Dashboard" />
      <div className="dashboardContent">
        <div className="dashboardContentTopPercentages">
          <PercentageCard
            number={684}
            name="Properties for sale"
            background="#2251F8"
            percentage={45}
          />
          <PercentageCard
            number={546}
            name="Properties for Rent"
            background="#30DB56"
            percentage={25}
          />
          <PercentageCard
            number={3672}
            name="Total customers"
            background="#FF9136"
            percentage={25}
          />
          <PercentageCard
            number={75}
            name="All visitors"
            background="#485462"
            percentage={37}
          />
          <PercentageCardPercent
            number={2356}
            name="Properties for sale"
            pathColor="#485462"
            percentage={71}
            target="Target 3k/month"
          />
          <PercentageCardPercent
            number={2206}
            name="Properties for rent"
            pathColor="#37D159"
            percentage={33}
            target="Target 3k/month"
          />
          <PercentageCardPercent
            number={2356}
            name="Properties for sale"
            pathColor="#485462"
            percentage={71}
            target="Target 3k/month"
          />
          <PercentageCardPercent
            number={2206}
            name="Properties for rent"
            pathColor="#37D159"
            percentage={33}
            target="Target 3k/month"
          />
        </div>
        <div className="dashboardContentBottomPercentages">
          <div className="dashboardContentBottomPercentagesLeftContainer">
            <div className="dashboardContentBottomPercentagesLeft">
              <PercentageCard
                number={684}
                name="Properties for sale"
                pathColor="#2251F8"
                percentage={45}
              />
              <PercentageCard
                number={546}
                name="Properties for Rent"
                pathColor="#30DB56"
                percentage={25}
              />
              <PercentageCard
                number={3672}
                name="Total customers"
                pathColor="#FF9136"
                percentage={25}
              />
              <PercentageCard
                number={75}
                name="All visitors"
                pathColor="#485462"
                percentage={37}
              />
            </div>
          </div>
          <div className="dashboardContentBottomPercentagesRight">
            <BarChart data={barChart} />
          </div>
        </div>
        <div className="dashboardContentStatistic">
          <div className="dashboardContentStatisticSegmet">
            <SalesStatistic />
          </div>
          <div className="dashboardContentStatisticSegmet">
            <RentStatistic />
          </div>
        </div>
        <div className="dashboardContentTotalRevenue">
          <TotalRevenue />
        </div>
        <div className="dashboardContentBottom">
          <Summary />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
