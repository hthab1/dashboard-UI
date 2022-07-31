import React from "react";
import PercentageCard from "../../../components/loggedinStack/dashboard/cards/PercentageCard";
import PercentageCardPercent from "../../../components/loggedinStack/dashboard/cards/PercentageCardPercent";
import Header from "../../../components/loggedinStack/Header";
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
      </div>
    </div>
  );
}

export default Dashboard;
