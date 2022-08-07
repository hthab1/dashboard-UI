import React, { useEffect, useState } from "react";
import "./Order.css";
import { BsCheck, BsThreeDotsVertical } from "react-icons/bs";
import { ShortenMoneyFormat, TimeFormat } from "../../../../functions/Format";

function Order({
  id,
  date,
  name,
  property,
  location,
  price,
  type,
  status,
  onView,
  onEdit,
  onDelete,
  selectAll,
}) {
  const [check, setCheck] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  let time = new Date(parseInt(date));

  useEffect(() => {
    let isSubscribed = true;
    const closeDropdown = (e) => {
      if (e.path[2].className !== "orderSegmentEnd") {
        setDropdown(false);
      }
    };
    if (isSubscribed) {
      if (dropdown) {
        document.body.addEventListener("click", closeDropdown);
      }
    }
    return () => {
      isSubscribed = false;
      if (dropdown) {
        document.body.removeEventListener("click", closeDropdown);
      }
    };
  }, [dropdown]);

  return (
    <div className="order">
      <div
        className="checkBox"
        onClick={() => {
          setCheck(!check);
        }}
      >
        {(check || selectAll) && <BsCheck />}
      </div>
      <div className="orderSegments">
        <div className="orderSegment ">
          <div className="titleForOrderCard">Order ID</div>
          <div>{id}</div>
        </div>
        <div className="orderSegment orderSegmentLarge">
          <div className="titleForOrderCard">Date</div>
          <div>
            {time.toLocaleDateString()}, {TimeFormat(parseInt(date))}{" "}
          </div>
        </div>
        <div className="orderSegment">
          <div className="titleForOrderCard">Subscriber</div>
          <div>{name}</div>
        </div>
        <div className="orderSegment">
          <div className="titleForOrderCard">Property</div>
          <div>{property}</div>
        </div>
        <div className="orderSegment">
          <div className="titleForOrderCard">Location</div>
          <div>{location}</div>
        </div>
        <div className="orderSegment orderSegmentSmall">
          <div className="titleForOrderCard">Price</div>
          <div>{ShortenMoneyFormat(parseInt(price))}</div>
        </div>
        <div className="orderSegment orderSegmentSmall">
          <div className="titleForOrderCard">Type</div>
          <div>{type}</div>
        </div>
        <div className="orderSegment orderSegmentLarge orderSegmentStatus">
          <div className="titleForOrderCard">PaymentStatus</div>
          {status === "Pending" && (
            <div className="orderStatus orderPending">Pending</div>
          )}
          {status === "Paid" && (
            <div className="orderStatus orderPaid">Paid</div>
          )}
          {status === "Completed" && (
            <div className="orderStatus orderCompleted">Completed</div>
          )}
        </div>
      </div>
      <div className="orderSegmentEnd">
        <div onClick={() => setDropdown(true)}>
          <BsThreeDotsVertical />
        </div>
        {dropdown && (
          <div className="orderDropdown">
            <span
              className="orderDropdownChoice"
              onClick={() => {
                setDropdown(false);
                onEdit();
              }}
            >
              Edit Subscriber Info
            </span>
            <span
              className="orderDropdownChoice"
              onClick={() => {
                setDropdown(false);
                onView();
              }}
            >
              View All Transactions
            </span>
            <span
              className="orderDropdownChoice"
              onClick={() => {
                setDropdown(false);
                onDelete();
              }}
            >
              Delete Subscriber
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Order;
