import React, { useEffect, useState } from "react";
import "./VisitorPass.css";
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

function VisitorPass({
  id,
  selectAll,
  name,
  property,
  location,
  NoOfVisitors,
  status,
  timestamp,
  accessCode,
  host,
  validity,
  phone,
  onActivate,
  onDeactivate,
  onViewList
}) {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);
  const [check, setCheck] = useState(false);
  const [visitorPassStatus, setVisitorPassStatus] = useState(status);
  const [deactivateModal,setDeactivateModal] = useState(false)
  const [viewDetailsModal, setViewDetailsModal] = useState(false)

  let time = new Date(parseInt(timestamp))

  useEffect(() => {
    let isSubscribed = true;
    const closeDropdown = (e) => {
      if (e.path[2].className !== "visitorPassSegmentEnd") {
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
    <div className="visitorPass">
      <Modal
        isOpen={viewDetailsModal}
        onRequestClose={() => setViewDetailsModal(false)}
        style={customStyles}
        contentLabel="View Service Charge"
      >
        <div className="modalDetails">
          
          <div className="modalDetailCloseContainer">
            <div className="modalDetailsClose" onClick={()=>setViewDetailsModal(false)}>
              <AiOutlineClose />
            </div>
          </div>
          <span className="modalDetailsName">{name}</span>
          <QRCode value={accessCode} level="H" size={100}/>
          <span className="modalDetailsSegementTitle">Access Code</span>
          <span className="modalDetailsSegementInfo">{accessCode}</span>
          <span className="modalDetailsSegementTitle">Phone</span>
          <span className="modalDetailsSegementInfo">{phone}</span>
          <span className="modalDetailsSegementTitle">Arrival Time</span>
          <span className="modalDetailsSegementInfo">
          {time.toLocaleDateString()}, {TimeFormat(parseInt(timestamp))}{" "}
          </span>
          <span className="modalDetailsSegementTitle">Validity</span>
          <span className="modalDetailsSegementInfo">{validity}</span>
          <span className="modalDetailsSegementTitle">Host</span>
          <span className="modalDetailsSegementInfo">{host}</span>
          <span className="modalDetailsSegementTitle">Location</span>
          <span className="modalDetailsSegementInfo">{location}</span>
        </div>
      </Modal>
      <Modal
        isOpen={deactivateModal}
        onRequestClose={() => setDeactivateModal(false)}
        style={customStyles}
        contentLabel="View Service Charge"
      >
        <div className="modalMark">
          <div className="modalMarkQuestion">
            Are you sure you want to deactivate this access code?
          </div>
          <div className="modalMarkButtons">
            <div className="modalMarkButton" onClick={() => setDeactivateModal(false)}>
              Cancel
            </div>
            <div
              className="modalMarkButton markModalButtonContinue"
              onClick={()=>{
                setVisitorPassStatus("inActive")
                setDeactivateModal(false)
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
      <div className="visitorPassSegments">
        <div className="visitorPassSegment ">
          <div className="titleForvisitorPassCard">ID</div>
          <div>#{id}</div>
        </div>

        <div className="visitorPassSegment visitorPassSegmentLarge">
          <div className="titleForvisitorPassCard ">Tenant</div>
          <div>{name}</div>
        </div>
        <div className="visitorPassSegment">
          <div className="titleForvisitorPassCard">Property</div>
          <div>{property}</div>
        </div>
        <div className="visitorPassSegment">
          <div className="titleForvisitorPassCard">Location</div>
          <div>{location}</div>
        </div>
        <div className="visitorPassSegment visitorPassSegmentLrge">
          <div className="titleForvisitorPassCard">No of Visitors</div>
          <div>{NoOfVisitors}</div>
        </div>
        <div className="visitorPassSegment visitorPassSegmentLarge visitorPassSegmentStatus">
          <div className="titleForvisitorPassCard">Status</div>
          {visitorPassStatus === "inActive" && (
            <div className="visitorPassStatus visitorPassPending">InActive</div>
          )}
          {visitorPassStatus === "active" && (
            <div className="visitorPassStatus visitorPassPaid">Active</div>
          )}
        </div>
      </div>
      <div className="visitorPassSegmentEnd">
        <div onClick={() => setDropdown(true)}>
          <BsThreeDotsVertical />
        </div>
        {dropdown && (
          <div className="visitorPassDropdown">
            <span
              className="visitorPassDropdownChoice"
              onClick={() => {
                setDropdown(false);
                setViewDetailsModal(true)
              }}
            >
              View
            </span>
            <span
              className="visitorPassDropdownChoice"
              onClick={() => {
                setDropdown(false);
                onViewList()
              }}
            >
              Visitor List
            </span>
            <span
              className="visitorPassDropdownChoice"
              onClick={() => {
                setDropdown(false);
                setVisitorPassStatus("active");
                onActivate();
              }}
            >
              Activate Access
            </span>
            <span
              className="visitorPassDropdownChoice"
              onClick={() => {
                setDropdown(false);
                setDeactivateModal(true)
              }}
            >
              Deactivate Access
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default VisitorPass;
