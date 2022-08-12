import React from 'react'
import "./VisitorsHeader.css"
import { BsCheck } from "react-icons/bs";

function VisitorsHeader({ check, setCheck }) {
  return (
    <div className='visitorsHeader' >
        <div
        className="checkBox"
        onClick={() => {
          setCheck(!check);
        }}
      >
        {check && <BsCheck />}
      </div>
      <div className="visitorsHeaderTitles">
        <div className="visitorsHeaderTitle ">Visitor ID</div>
        <div className="visitorsHeaderTitle visitorsHeaderTitleLarge">Date</div>
        <div className="visitorsHeaderTitle">Visitor</div>
        <div className="visitorsHeaderTitle">Host</div>
        <div className="visitorsHeaderTitle ">Address</div>
        <div className="visitorsHeaderTitle ">Validity</div>
        <div className="visitorsHeaderTitle visitorsHeaderTitleLarge">Status</div>
      </div>
      <div className="visitorsHeaderEnd"></div>
    </div>
  )
}

export default VisitorsHeader