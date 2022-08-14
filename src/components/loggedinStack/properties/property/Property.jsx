import React, { useEffect, useState } from "react";
import "./Property.css";
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

function Property({
  name,
  image,
  development,
  propertyType,
  serviceType,
  unit,
  price,
  onEdit,
  onDelete,
  onView
}) {
  const [dropdown, setDropdown] = useState(false);
  const [modalDelete, setModalDelete] = useState(false)

  useEffect(() => {
    let isSubscribed = true;
    const closeDropdown = (e) => {
      if (e.path[1].className !== "propertyMoreIcon") {
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
    <div className="property">
        <Modal
        isOpen={modalDelete}
        onRequestClose={() => setModalDelete(false)}
        style={customStyles}
        contentLabel="View Service Charge"
      >
        <div className="modalMark">
          <div className="modalMarkQuestion">
            Are you sure you want to delete this property?
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
      <div className="propertyContent">
        <img src={image} alt="" className="propertyImage" />
        <div className="propertyContentInfo">
          <div className="propertyContentInfoSegments">
            <div className="propertyContentInfoSegment">
              <span className="propertySegmentMainText">{name}</span>
            </div>
            <div className="propertyContentInfoSegment">
              <span className="propertySegmentTitle">Development</span>
              <span className="propertySegmentMainText">{development}</span>
            </div>
            <div className="propertyContentInfoSegment">
              <span className="propertySegmentTitle">Property Type</span>
              <span className="propertySegmentMainText">{propertyType}</span>
            </div>
            <div className="propertyContentInfoSegment">
              <span className="propertySegmentTitle">Service Type</span>
              <span className="propertySegmentMainText">{serviceType}</span>
            </div>
            <div className="propertyContentInfoSegment">
              <span className="propertySegmentTitle">Unit</span>
              <span className="propertySegmentMainText">{unit}</span>
            </div>
            <div className="propertyContentInfoSegment">
              <span className="propertySegmentTitle">Price</span>
              <span className="propertySegmentMainText">{MoneyFormat(price)}</span>
            </div>
          </div>
        </div>
        <div className="propertyMore" onClick={() => setDropdown(true)}>
          <div className="propertyMoreIcon">
            <BsThreeDots />
          </div>
          {dropdown && (
            <div className="propertyDropdown">
              <span className="propertyDropdownChoice" onClick={onView}>
                View Property
              </span>
              <span className="propertyDropdownChoice" onClick={onEdit}>
                Edit Property
              </span>
              <span className="propertyDropdownChoice" onClick={() => setModalDelete(true)}>
                Delete Property
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Property;
