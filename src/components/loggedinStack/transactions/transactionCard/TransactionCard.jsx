import React, { useEffect, useState } from "react";
import "./TransactionCard.css";
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
    btransactionRadius: 10,
  },
};

function TransactionCard({
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
  const [transactionStatus, setTransactionStatus] = useState(status);
  let time = new Date(parseInt(date));

  useEffect(() => {
    let isSubscribed = true;
    const closeDropdown = (e) => {
      if (e.path[2].className !== "transactionSegmentEnd") {
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
    <div className="transaction">
      <Modal
        isOpen={confirmModal}
        onRequestClose={() => setConfirmModal(false)}
        style={customStyles}
        contentLabel="View Service Charge"
      >
        <div className="modalMark">
          <div className="modalMarkQuestion">
            Are you sure you want to sonfirm payment?
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
                setTransactionStatus("Confirmed");
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
      <div className="transactionSegments">
        <div className="transactionSegment ">
          <div className="titleFortransactionCard">Reference</div>
          <div>#{id}</div>
        </div>
        <div className="transactionSegment transactionSegmentLarge">
          <div className="titleFortransactionCard">Date</div>
          <div>
            {time.toLocaleDateString()}, {TimeFormat(parseInt(date))}{" "}
          </div>
        </div>
        <div className="transactionSegment">
          <div className="titleFortransactionCard">User</div>
          <div>{user}</div>
        </div>
        <div className="transactionSegment">
          <div className="titleFortransactionCard">Property</div>
          <div>{property}</div>
        </div>
        <div className="transactionSegment">
          <div className="titleFortransactionCard">Payment Method</div>
          <div>{method}</div>
        </div>
        <div className="transactionSegment transactionSegmentSmall">
          <div className="titleFortransactionCard">Amount</div>
          <div>{MoneyFormat(parseInt(amount))}</div>
        </div>
        <div className="transactionSegment transactionSegmentSmall">
          <div className="titleFortransactionCard">Payment Plan</div>
          <div>{plan}</div>
        </div>
        <div className="transactionSegment transactionSegmentLarge transactionSegmentStatus">
          <div className="titleFortransactionCard">Payment Status</div>
          {transactionStatus === "Pending" && (
            <div className="transactionStatus transactionPending">Pending</div>
          )}

          {transactionStatus === "Confirmed" && (
            <div className="transactionStatus transactionCompleted">Confirmed</div>
          )}
        </div>
      </div>
      <div className="transactionSegmentEnd">
        <div onClick={() => setDropdown(true)}>
          <BsThreeDotsVertical />
        </div>
        {dropdown && (
          <div className="transactionDropdown">
            <span
              className="transactionDropdownChoice"
              onClick={() => {
                setDropdown(false);
              }}
            >
              View
            </span>
            <span
              className="transactionDropdownChoice"
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

export default TransactionCard;
