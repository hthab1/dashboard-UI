import React, { useEffect, useState } from "react";
import "./Order.css";
import { BsCheck, BsThreeDotsVertical } from "react-icons/bs";
import {
  MoneyFormat,
  ShortenMoneyFormat,
  TimeFormat,
} from "../../../../functions/Format";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../../../../../assets/Logo.svg";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: window.screen.width > 900 ? "50%" : "80%",
    maxHeight: "90%",
    borderRadius: 10,
  },
};

function Order({
  id,
  date,
  name,
  customerType,
  property,
  location,
  price,
  type,
  status,
  onViewSubscriber,
  onEditSubscriber,
  onDeleteSubscriber,
  selectAll,
  serviceCharge,
  onMarkAsPaid,
  onMakePayment,
  onPrint,
}) {
  const [check, setCheck] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [mark, setMark] = useState(false);
  const [view, setView] = useState(false);
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
      <Modal
        isOpen={view}
        onRequestClose={() => setView(false)}
        style={customStyles}
        contentLabel="View Service Charge"
      >
        <div className="viewServiceChargeModal">
          <div className="modalCloseContainer">
            <span className="modalClose" onClick={() => setView(false)}>
              <AiOutlineClose />
            </span>
          </div>
          <div className="modalLogoContaoner">
            <img src={Logo} alt="" className="modalLogo" />
          </div>
          <div className="modalServiceChargeContent">
            <div className="modalServiceChargeSegment">
              <div className="modalServiceChargeContentTitle">Order ID</div>
              <div className="modalServiceChargeContentText">#{id}</div>
            </div>
            <div className="modalServiceChargeSegment">
              <div className="modalServiceChargeContentTitle">Name</div>
              <div className="modalServiceChargeContentText">{name}</div>
            </div>
            <div className="modalServiceChargeSegment">
              <div className="modalServiceChargeContentTitle">Date</div>
              <div className="modalServiceChargeContentText">
                {time.toLocaleDateString()}, {TimeFormat(parseInt(date))}{" "}
              </div>
            </div>
            <div className="modalServiceChargeSegment">
              <div className="modalServiceChargeContentTitle">
                Customer type
              </div>
              <div className="modalServiceChargeContentText">
                {customerType}{" "}
              </div>
            </div>
            <div className="modalServiceChargeSegment">
              <div className="modalServiceChargeContentTitle">Property</div>
              <div className="modalServiceChargeContentText">{property}</div>
            </div>
            <div className="modalServiceChargeSegment">
              <div className="modalServiceChargeContentTitle">Location</div>
              <div className="modalServiceChargeContentText">{location}</div>
            </div>
            <div className="modalServiceChargeSegment">
              <div className="modalServiceChargeContentTitle">Type</div>
              <div className="modalServiceChargeContentText">{type}</div>
            </div>
            <div className="modalServiceChargeSegment">
              <div className="modalServiceChargeContentTitle">
                Service Charge
              </div>
              <div className="modalServiceChargeContentText">
                {MoneyFormat(price)}
              </div>
            </div>
            <div className="modalServiceChargeSegment">
              <div className="modalServiceChargeContentTitle">
                Payment Status
              </div>
              <div
                className="modalServiceChargeContentText"
                style={{
                  color:
                    status === "Pending"
                      ? "#ff9f34"
                      : status === "Completed"
                      ? "#09bd3c"
                      : "#016a5f",
                }}
              >
                {status}
              </div>
            </div>
          </div>
          <div className="modalButtonPrintContainer">
            <div className="modalButtonPrint" onClick={onPrint}>
              Print
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={mark}
        onRequestClose={() => setMark(false)}
        style={customStyles}
        contentLabel="View Service Charge"
      >
        <div className="modalMark">
          <div className="modalMarkQuestion">
            Are you sure you want to mark payment as completed?
          </div>
          <div className="modalMarkButtons">
            <div className="modalMarkButton" onClick={() => setMark(false)}>
              Cancel
            </div>
            <div
              className="modalMarkButton markModalButtonContinue"
              onClick={onMarkAsPaid}
            >
              Yes, Continue
            </div>
          </div>
        </div>
      </Modal>
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
          <div>#{id}</div>
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
            {serviceCharge ? (
              <>
                <span
                  className="orderDropdownChoice"
                  onClick={() => {
                    setDropdown(false);
                    setView(true);
                  }}
                >
                  View
                </span>
                <span
                  className="orderDropdownChoice"
                  onClick={() => {
                    setDropdown(false);
                    setMark(true);
                  }}
                >
                  Mark as paid
                </span>
                <span
                  className="orderDropdownChoice"
                  onClick={() => {
                    setDropdown(false);
                    onMakePayment();
                  }}
                >
                  Make Payment
                </span>
              </>
            ) : (
              <>
                <span
                  className="orderDropdownChoice"
                  onClick={() => {
                    setDropdown(false);
                    onEditSubscriber();
                  }}
                >
                  Edit Subscriber Info
                </span>
                <span
                  className="orderDropdownChoice"
                  onClick={() => {
                    setDropdown(false);
                    onViewSubscriber();
                  }}
                >
                  View All Transactions
                </span>
                <span
                  className="orderDropdownChoice"
                  onClick={() => {
                    setDropdown(false);
                    onDeleteSubscriber();
                  }}
                >
                  Delete Subscriber
                </span>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Order;
