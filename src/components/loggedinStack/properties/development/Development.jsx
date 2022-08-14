import React, { useEffect, useState } from "react";
import "./Development.css";
import { MoneyFormat } from "../../../functions/Format";
import { BsThreeDots } from "react-icons/bs";
import Modal from "react-modal";

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

function Development({
  image,
  development,
  location,
  properties,
  tenants,
  homeOwners,
  subscribers,
  onEdit,
  onDelete,
  onView
}) {
  const [dropdown, setDropdown] = useState(false);
  const [modalDelete, setModalDelete] = useState(false)

  useEffect(() => {
    let isSubscribed = true;
    const closeDropdown = (e) => {
      if (e.path[1].className !== "developmentMoreIcon") {
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
    <div className="development">
        <Modal
        isOpen={modalDelete}
        onRequestClose={() => setModalDelete(false)}
        style={customStyles}
        contentLabel="View Service Charge"
      >
        <div className="modalMark">
          <div className="modalMarkQuestion">
            Are you sure you want to delete this development?
          </div>
          <div className="modalMarkButtons">
            <div className="modalMarkButton" onClick={() => setModalDelete(false)}>
              Cancel
            </div>
            <div
              className="modalMarkButton markModalButtonContinue"
              onClick={()=>{
                setModalDelete(false)
                onDelete()
              }}
            >
              Yes, Continue
            </div>
          </div>
        </div>
      </Modal>
      <div className="developmentContent">
        <img src={image} alt="" className="developmentImage" />
        <div className="developmentContentInfo">
          <div className="developmentContentInfoSegments">
            <div className="developmentContentInfoSegment">
              <span className="developmentSegmentMainText">{development}</span>
            </div>
            <div className="developmentContentInfoSegment ">
              <span className="developmentSegmentTitle">Location</span>
              <span className="developmentSegmentMainText developmentContentInfoLarge">{location}</span>
            </div>
            <div className="developmentContentInfoSegment">
              <span className="developmentSegmentTitle">Properties</span>
              <span className="developmentSegmentMainText">{properties}</span>
            </div>
            <div className="developmentContentInfoSegment">
              <span className="developmentSegmentTitle">Tenants</span>
              <span className="developmentSegmentMainText">{tenants}</span>
            </div>
            <div className="developmentContentInfoSegment">
              <span className="developmentSegmentTitle">Home Owners</span>
              <span className="developmentSegmentMainText">{homeOwners}</span>
            </div>
            <div className="developmentContentInfoSegment">
              <span className="developmentSegmentTitle">Subscribers</span>
              <span className="developmentSegmentMainText">{subscribers}</span>
            </div>
            <div className="developmentContentInfoButton" onClick={onView}>
              View Properties
            </div>
          </div>
        </div>
        <div className="developmentMore" onClick={() => setDropdown(true)}>
          <div className="developmentMoreIcon">
            <BsThreeDots />
          </div>
          {dropdown && (
            <div className="developmentDropdown">
              <span className="developmentDropdownChoice" onClick={onEdit}>
                Edit development
              </span>
              <span className="developmentDropdownChoice" onClick={() => setModalDelete(true)}>
                Delete development
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Development;
