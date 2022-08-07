import React from "react";
import "./OrdersHeader.css";
import { BsCheck } from "react-icons/bs";

function OrdersHeader({ check, setCheck }) {
  return (
    <div className="ordersHeader">
      <div
        className="checkBox"
        onClick={() => {
          setCheck(!check);
        }}
      >
        {check && <BsCheck />}
      </div>
      <div className="ordersHeaderTitles">
        <div className="ordersHeaderTitle ">Order ID</div>
        <div className="ordersHeaderTitle ordersHeaderTitleLarge">Date</div>
        <div className="ordersHeaderTitle">Subscriber</div>
        <div className="ordersHeaderTitle">Property</div>
        <div className="ordersHeaderTitle">Location</div>
        <div className="ordersHeaderTitle ordersHeaderTitleSmall">Price</div>
        <div className="ordersHeaderTitle ordersHeaderTitleSmall">Type</div>
        <div className="ordersHeaderTitle ordersHeaderTitleLarge">
          Payment Status
        </div>
      </div>
      <div className="ordersHeaderEnd"></div>
    </div>
  );
}

export default OrdersHeader;
