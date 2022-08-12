import React from 'react'
import "./VisitorsPassHeader.css"
import { BsCheck } from "react-icons/bs";

function VisitorsPassHeader({ check, setCheck }) {
  return (
    <div className="visitorsPassHeader">
      <div
        className="checkBox"
        onClick={() => {
          setCheck(!check);
        }}
      >
        {check && <BsCheck />}
      </div>
      <div className="visitorsPassHeaderTitles">
        <div className="visitorsPassHeaderTitle ">ID</div>
        <div className="visitorsPassHeaderTitle visitorsPassHeaderTitleLarge">Tenant</div>
        <div className="visitorsPassHeaderTitle">Property</div>
        <div className="visitorsPassHeaderTitle">Location</div>
        <div className="visitorsPassHeaderTitle ">No of Visitors</div>
        <div className="visitorsPassHeaderTitle visitorsPassHeaderTitleLarge">Status</div>
      </div>
      <div className="visitorsPassHeaderEnd"></div>
    </div>
  )
}

export default VisitorsPassHeader