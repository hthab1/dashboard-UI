import React from 'react'
import "./SubscriptionsHeader.css"
import {BsCheck} from "react-icons/bs"

function SubscriptionsHeader({ check, setCheck }) {
  return (
    <div className="subscriptionsHeader">
      <div
        className="checkBox"
        onClick={() => {
          setCheck(!check);
        }}
      >
        {check && <BsCheck />}
      </div>
      <div className="subscriptionsHeaderTitles">
        <div className="subscriptionsHeaderTitle ">Reference</div>
        <div className="subscriptionsHeaderTitle subscriptionsHeaderTitleLarge">Date</div>
        <div className="subscriptionsHeaderTitle">Subscriber</div>
        <div className="subscriptionsHeaderTitle">Property</div>
        <div className="subscriptionsHeaderTitle">Payment method</div>
        <div className="subscriptionsHeaderTitle subscriptionsHeaderTitleSmall">Amount</div>
        <div className="subscriptionsHeaderTitle subscriptionsHeaderTitleSmall">Payment Plan</div>
        <div className="subscriptionsHeaderTitle subscriptionsHeaderTitleLarge">
          Payment Status
        </div>
      </div>
      <div className="subscriptionsHeaderEnd"></div>
    </div>
  )
}

export default SubscriptionsHeader