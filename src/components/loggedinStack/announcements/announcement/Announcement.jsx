import React, { useEffect, useState } from "react";
import "./Announcement.css"
import {BsThreeDots} from "react-icons/bs"
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

function Announcement({ image, title, news, onEdit, onDelete }) {
  const [dropdown, setDropdown] = useState(false);
  const [modalDelete, setModalDelete] =useState(false);

  useEffect(() => {
    let isSubscribed = true;
    const closeDropdown = (e) => {
      if (e.path[1].className !== "announcementMoreIcon") {
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
    <div className="announcement">
         <Modal
        isOpen={modalDelete}
        onRequestClose={() => setModalDelete(false)}
        style={customStyles}
        contentLabel="View Service Charge"
      >
        <div className="modalMark">
          <div className="modalMarkQuestion">
            Are you sure you want to delete this announcement?
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
      <div className="announcementContent">
        <img src={image} alt="" className="announcementImage" />
        <div className="announcementContentInfo">
          <div className="announcementContentInfoSegments">
            <div className="announcementContentInfoSegment">
              <span className="announcementSegmentTitle">{title}</span>
              <span className="announcementSegmentMainText">{news}</span>
            </div>
          </div>
        </div>
        <div className="announcementMore" onClick={() => setDropdown(true)}>
          <div className="announcementMoreIcon">
            <BsThreeDots />
          </div>
          {dropdown && (
            <div className="announcementDropdown">
              <span className="announcementDropdownChoice" onClick={onEdit}>
                Edit Announcement
              </span>
              <span className="announcementDropdownChoice" onClick={()=>{
                setModalDelete(true)
              }}>
                Delete 
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Announcement;
