import React from 'react'
import "./TransactionsHeader.css"
import {BsCheck} from "react-icons/bs"

function TransactionsHeader({ check, setCheck }) {
  return (
    <div className="transactionsHeader">
      <div
        className="checkBox"
        onClick={() => {
          setCheck(!check);
        }}
      >
        {check && <BsCheck />}
      </div>
      <div className="transactionsHeaderTitles">
        <div className="transactionsHeaderTitle ">Reference</div>
        <div className="transactionsHeaderTitle transactionsHeaderTitleLarge">Date</div>
        <div className="transactionsHeaderTitle">User</div>
        <div className="transactionsHeaderTitle">Property</div>
        <div className="transactionsHeaderTitle">Payment method</div>
        <div className="transactionsHeaderTitle transactionsHeaderTitleSmall">Amount</div>
        <div className="transactionsHeaderTitle transactionsHeaderTitleSmall">Payment Plan</div>
        <div className="transactionsHeaderTitle transactionsHeaderTitleLarge">
          Payment Status
        </div>
      </div>
      <div className="transactionsHeaderEnd"></div>
    </div>
  )
}

export default TransactionsHeader