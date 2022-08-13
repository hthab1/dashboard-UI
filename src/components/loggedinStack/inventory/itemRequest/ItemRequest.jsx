import React, { useState, useEffect } from "react";
import "./ItemRequest.css";
import { BsCheck, BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { TimeFormat } from "../../../functions/Format";

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

function ItemRequest({
  id,
  name,
  property,
  items,
  noOfItems,
  status,
  selectAll,
  onCancel,
  onHold,
  onFulfill,
}) {
  const [dropdown, setDropdown] = useState(false);
  const [check, setCheck] = useState(false);
  const [itemsRequestedStatus, setItemsRequestedStatus] = useState(status);
  const [modalView, setModalView] = useState(false);

  useEffect(() => {
    let isSubscribed = true;
    const closeDropdown = (e) => {
      if (e.path[2].className !== "itemRequestSegmentEnd") {
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
    <div className="itemRequest">
      <Modal
        isOpen={modalView}
        onRequestClose={() => setModalView(false)}
        style={customStyles}
        contentLabel="View Service Charge"
      >
        <div className="modalViewRequest">
          <span className="modalViewRequestTitle">Item Request</span>
          <span className="modalViewRequestInfo">#{id}</span>
          <span className="modalViewRequestTitle">{name}</span>
          <span className="modalViewRequestInfo">{property}</span>
          <div className="modalViewRequestItems">
            {items?.map((item, index) => (
              <div key={index} className="modalViewRequestItem">
                <div className="modalViewRequestItemLeft">
                  <span className="modalRequestItemAmount">
                    {item.requested}
                  </span>
                  <span className="modalRequestItemName">{item.name}</span>
                </div>
                <div className="modalViewRequestItemRight">
                  <div className="modalRequestItemAvailableTitle">
                    Available
                  </div>
                  <div className="modalRequestItemAvailableAmount">
                    {item.available}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="modalViewRequestButtons">
            <div className="modalViewRequestButtonFulfill" onClick={()=>{
              setModalView(false)
              setItemsRequestedStatus("Fulfilled")
              onFulfill()
            }}>Fulfill</div>
            <div className="modalViewRequestButtonCancel" onClick={()=>setModalView(false)}>Cancel</div>
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
      <div className="itemRequestSegments">
        <div className="itemRequestSegment ">
          <div className="titleForitemRequestCard">Request ID</div>
          <div>#{id}</div>
        </div>

        <div className="itemRequestSegment itemRequestSegmentLarge">
          <div className="titleForitemRequestCard ">Tenant/ Home Owner</div>
          <div>{name}</div>
        </div>
        <div className="itemRequestSegment">
          <div className="titleForitemRequestCard">Property</div>
          <div>{property}</div>
        </div>
        <div className="itemRequestSegment itemRequestSegmentLarge">
          <div className="titleForitemRequestCard">Items Requested</div>
          <div>
            {items?.map((item, index) => (
              <span key={index}>
                {item.name}
                {", "}
              </span>
            ))}
          </div>
        </div>
        <div className="itemRequestSegment itemRequestSegmentLrge">
          <div className="titleForitemRequestCard ">No of Items</div>
          <div className="titleForitemRequestCardCentered">{noOfItems}</div>
        </div>
        <div className="itemRequestSegment itemRequestSegmentLarge itemRequestSegmentStatus">
          <div className="titleForitemRequestCard">Status</div>
          {itemsRequestedStatus === "Pending" && (
            <div className="itemRequestStatus itemRequestPending">Pending</div>
          )}
          {itemsRequestedStatus === "Fulfilled" && (
            <div className="itemRequestStatus itemRequestCompleted">
              Fulfilled
            </div>
          )}
          {itemsRequestedStatus === "UnFulfilled" && (
            <div className="itemRequestStatus itemRequestUnfulfilled">
              UnFulfilled
            </div>
          )}
        </div>
      </div>
      <div className="itemRequestSegmentEnd">
        <div onClick={() => setDropdown(true)}>
          <BsThreeDotsVertical />
        </div>
        {dropdown && (
          <div className="itemRequestDropdown">
            <span
              className="itemRequestDropdownChoice"
              onClick={() => {
                setDropdown(false);
                setModalView(true);
              }}
            >
              View Request
            </span>
            <span
              className="itemRequestDropdownChoice"
              onClick={() => {
                setDropdown(false);
                setItemsRequestedStatus("Fulfilled")
                onFulfill()
              }}
            >
              Fulfill
            </span>
            <span
              className="itemRequestDropdownChoice"
              onClick={() => {
                setDropdown(false);
                setItemsRequestedStatus("Pending")
                onHold()
              }}
            >
              Put on Hold
            </span>
            <span
              className="itemRequestDropdownChoice"
              onClick={() => {
                setDropdown(false);
                onCancel()
              }}
            >
              Cancel
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemRequest;
