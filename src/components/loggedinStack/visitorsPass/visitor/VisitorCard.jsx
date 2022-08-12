import React, { useEffect, useState } from "react";
import "./VisitorCard.css";
import { BsCheck, BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import QRCode from "react-qr-code";
import {TimeFormat} from "../../../functions/Format"

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

function VisitorCard({
  id,
  date,
  visitor,
  host,
  address,
  validity,
  status,
  selectAll,
  accessCode,
  phone,
  onActivate,
  onDeactivate
}) {
  const [check, setCheck] = useState(false);
  const [dropdown, setDropdown] = useState(false)
  const [viewDetailsModal, setViewDetailModal] = useState(false);
  const [invalidModal, setInValidModal] = useState(false);
  const [visitorStatus, setVisitorStatus] = useState(status);

  let time = new Date(parseInt(date))

  useEffect(() => {
    let isSubscribed = true;
    const closeDropdown = (e) => {
      if (e.path[2].className !== "visitorCardSegmentEnd") {
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

  return <div className="visitorCard">
     <Modal
        isOpen={viewDetailsModal}
        onRequestClose={() => setViewDetailModal(false)}
        style={customStyles}
        contentLabel="View Service Charge"
      >
        <div className="modalDetails">
          
          <div className="modalDetailCloseContainer">
            <div className="modalDetailsClose" onClick={()=>setViewDetailModal(false)}>
              <AiOutlineClose />
            </div>
          </div>
          <span className="modalDetailsName">{visitor}</span>
          <QRCode value={accessCode} level="H" size={100}/>
          <span className="modalDetailsSegementTitle">Access Code</span>
          <span className="modalDetailsSegementInfo">{accessCode}</span>
          <span className="modalDetailsSegementTitle">Phone</span>
          <span className="modalDetailsSegementInfo">{phone}</span>
          <span className="modalDetailsSegementTitle">Arrival Time</span>
          <span className="modalDetailsSegementInfo">
          {time.toLocaleDateString()}, {TimeFormat(parseInt(date))}{" "}
          </span>
          {visitorStatus === "Passed" && (
            <>
          <span className="modalDetailsSegementTitle">Arrived at</span>
          <span className="modalDetailsSegementInfo">
          {time.toLocaleDateString()}, {TimeFormat(parseInt(date))}{" "}
          </span>
            </>
            
          )}
          <span className="modalDetailsSegementTitle">Validity</span>
          <span className="modalDetailsSegementInfo">{validity}</span>
          <span className="modalDetailsSegementTitle">Host</span>
          <span className="modalDetailsSegementInfo">{host}</span>
          <span className="modalDetailsSegementTitle">Location</span>
          <span className="modalDetailsSegementInfo">{address}</span>
        </div>
      </Modal>
      <Modal
        isOpen={invalidModal}
        onRequestClose={() => setInValidModal(false)}
        style={customStyles}
        contentLabel="View Service Charge"
      >
        <div className="modalMark">
          <div className="modalMarkQuestion">
            Are you sure you want to deactivate user's access?
          </div>
          <div className="modalMarkButtons">
            <div className="modalMarkButton" onClick={() => setInValidModal(false)}>
              Cancel
            </div>
            <div
              className="modalMarkButton markModalButtonContinue"
              onClick={()=>{
                setVisitorStatus("InValid")
                setInValidModal(false)
                onDeactivate()
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
      <div className="visitorCardSegments">
        <div className="visitorCardSegment ">
          <div className="titleForvisitorCardCard">ID</div>
          <div>#{id}</div>
        </div>

        <div className="visitorCardSegment visitorCardSegmentLarge">
          <div className="titleForvisitorCardCard ">Date</div>
          <div>
          {time.toLocaleDateString()}, {TimeFormat(parseInt(date))}{" "}
          </div>
        </div>
        <div className="visitorCardSegment">
          <div className="titleForvisitorCardCard">Visitor</div>
          <div>{visitor}</div>
        </div>
        <div className="visitorCardSegment">
          <div className="titleForvisitorCardCard">Host</div>
          <div>{host}</div>
        </div>
        <div className="visitorCardSegment visitorCardSegmentLrge">
          <div className="titleForvisitorCardCard">Property</div>
          <div>{address}</div>
        </div>
        <div className="visitorCardSegment visitorCardSegmentLrge">
          <div className="titleForvisitorCardCard">Validity</div>
          <div>{validity}</div>
        </div>
        <div className="visitorCardSegment visitorCardSegmentLarge visitorCardSegmentStatus">
          <div className="titleForvisitorCardCard">Status</div>
          {visitorStatus === "InValid" && (
            <div className="visitorCardStatus visitorCardPending">InValid</div>
          )}
          {visitorStatus === "Valid" && (
            <div className="visitorCardStatus visitorCardPaid">Valid</div>
          )}
          {visitorStatus === "Passed" && (
            <div className="visitorCardStatus visitorCardPaid visitorCardCompleted">Passed</div>
          )}
        </div>
      </div>
      <div className="visitorCardSegmentEnd">
        <div onClick={() => setDropdown(true)}>
          <BsThreeDotsVertical />
        </div>
        {dropdown && (
          <div className="visitorCardDropdown">
            <span
              className="visitorCardDropdownChoice"
              onClick={() => {
                setDropdown(false);
                setViewDetailModal(true)
              }}
            >
              View
            </span>
            <span
              className="visitorCardDropdownChoice"
              onClick={() => {
                setDropdown(false);
                setVisitorStatus("Valid");
                onActivate();
              }}
            >
              Activate Access
            </span>
            <span
              className="visitorCardDropdownChoice"
              onClick={() => {
                setDropdown(false);
                setInValidModal(true)
              }}
            >
              Deactivate Access
            </span>
          </div>
        )}
      </div>
  </div>;
}

export default VisitorCard;
