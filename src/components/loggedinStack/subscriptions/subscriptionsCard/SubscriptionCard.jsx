import React, { useState, useEffect } from 'react'
import "./SubscriptionCard.css"
import { BsCheck, BsThreeDotsVertical } from "react-icons/bs";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { MoneyFormat, TimeFormat } from "../../../functions/Format";

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
    bsubscriptionRadius: 10,
  },
};

function SubscriptionCard({
    id,
    date,
    user,
    property,
    method,
    amount,
    plan,
    status,
    onConfirm,
    selectAll,
  }) {
    const [check, setCheck] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [confirmModal, setConfirmModal] = useState(false);
    const [subscriptionStatus, setSubscriptionStatus] = useState(status);
    let time = new Date(parseInt(date));
  
    useEffect(() => {
      let isSubscribed = true;
      const closeDropdown = (e) => {
        if (e.path[2].className !== "subscriptionSegmentEnd") {
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
      <div className="subscription">
        <Modal
          isOpen={confirmModal}
          onRequestClose={() => setConfirmModal(false)}
          style={customStyles}
          contentLabel="View Service Charge"
        >
          <div className="modalMark">
            <div className="modalMarkQuestion">
              Are you sure you want to confirm payment?
            </div>
            <div className="modalMarkButtons">
              <div
                className="modalMarkButton"
                onClick={() => setConfirmModal(false)}
              >
                Cancel
              </div>
              <div
                className="modalMarkButton markModalButtonContinue"
                onClick={() => {
                  setConfirmModal(false);
                  setSubscriptionStatus("Confirmed");
                  onConfirm();
                }}
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
        <div className="subscriptionSegments">
          <div className="subscriptionSegment ">
            <div className="titleForsubscriptionCard">Reference</div>
            <div>#{id}</div>
          </div>
          <div className="subscriptionSegment subscriptionSegmentLarge">
            <div className="titleForsubscriptionCard">Date</div>
            <div>
              {time.toLocaleDateString()}, {TimeFormat(parseInt(date))}{" "}
            </div>
          </div>
          <div className="subscriptionSegment">
            <div className="titleForsubscriptionCard">User</div>
            <div>{user}</div>
          </div>
          <div className="subscriptionSegment">
            <div className="titleForsubscriptionCard">Property</div>
            <div>{property}</div>
          </div>
          <div className="subscriptionSegment">
            <div className="titleForsubscriptionCard">Payment Method</div>
            <div>{method}</div>
          </div>
          <div className="subscriptionSegment subscriptionSegmentSmall">
            <div className="titleForsubscriptionCard">Amount</div>
            <div>{MoneyFormat(parseInt(amount))}</div>
          </div>
          <div className="subscriptionSegment subscriptionSegmentSmall">
            <div className="titleForsubscriptionCard">Payment Plan</div>
            <div>{plan}</div>
          </div>
          <div className="subscriptionSegment subscriptionSegmentLarge subscriptionSegmentStatus">
            <div className="titleForsubscriptionCard">Payment Status</div>
            {subscriptionStatus === "Pending" && (
              <div className="subscriptionStatus subscriptionPending">Pending</div>
            )}
  
            {subscriptionStatus === "Confirmed" && (
              <div className="subscriptionStatus subscriptionCompleted">Confirmed</div>
            )}
          </div>
        </div>
        <div className="subscriptionSegmentEnd">
          <div onClick={() => setDropdown(true)}>
            <BsThreeDotsVertical />
          </div>
          {dropdown && (
            <div className="subscriptionDropdown">
              <span
                className="subscriptionDropdownChoice"
                onClick={() => {
                  setDropdown(false);
                }}
              >
                View
              </span>
              <span
                className="subscriptionDropdownChoice"
                onClick={() => {
                  setDropdown(false);
                  setConfirmModal(true);
                }}
              >
                Confirm Payment
              </span>
            </div>
          )}
        </div>
      </div>
    );
}

export default SubscriptionCard