import React, { useEffect, useState } from "react";
import "./StaffCard.css";
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

function StaffCard({ id, name, role, email, phone, image, onEdit, onDelete }) {
  const [dropdown, setDropdown] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const loggedInRole = "Admin";

  useEffect(() => {
    let isSubscribed = true;
    const closeDropdown = (e) => {
      if (e.path[1].className !== "staffCardMoreIcon") {
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
    <div className="staffCard">
      <Modal
        isOpen={deleteModal}
        onRequestClose={() => setDeleteModal(false)}
        style={customStyles}
        contentLabel="View Service Charge"
      >
        <div className="modalMark">
          <div className="modalMarkQuestion">
            Are you sure you want to delete staff?
          </div>
          <div className="modalMarkButtons">
            <div
              className="modalMarkButton"
              onClick={() => setDeleteModal(false)}
            >
              Cancel
            </div>
            <div
              className="modalMarkButton markModalButtonContinue"
              onClick={() => {
                setDeleteModal(false);
                onDelete();
              }}
            >
              Yes, Continue
            </div>
          </div>
        </div>
      </Modal>
      <div className="staffCardContent">
        <img src={image} alt="" className="staffCardImage" />
        <div className="staffCardContentInfo">
          <div className="staffCardContentInfoSegments">
            <div className="staffCardContentInfoSegment">
              <span className="staffCardId">#{id}</span>
              <span className="staffCardSegmentMainText">{name}</span>
            </div>
            <div className="staffCardContentInfoSegment">
              <span className="staffCardSegmentTitle">Role</span>
              <span className="staffCardSegmentMainText">{role}</span>
            </div>
            <div className="staffCardContentInfoSegment">
              <span className="staffCardSegmentTitle">Phone Number</span>
              <span className="staffCardSegmentMainText">{phone}</span>
            </div>
            <div className="staffCardContentInfoSegment">
              <span className="staffCardSegmentTitle">Email Address</span>
              <span className="staffCardSegmentMainText staffCardSegmentMainTextLarge">
                {email}
              </span>
            </div>
          </div>
        </div>
        {loggedInRole === "Admin" && (
          <div className="staffCardMore" onClick={() => setDropdown(true)}>
            <div className="staffCardMoreIcon">
              <BsThreeDots />
            </div>
            {dropdown && (
              <div className="staffCardDropdown">
                <span className="staffCardDropdownChoice" onClick={onEdit}>
                  Edit Staff Info
                </span>
                <span
                  className="staffCardDropdownChoice"
                  onClick={() => {
                    setDeleteModal(true);
                  }}
                >
                  Delete Staff
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default StaffCard;
