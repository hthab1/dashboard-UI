import React, { useEffect, useState } from "react";
import "./HomeOwner.css"
import { TimeFormat } from "../../../../../components/functions/Format";
import { BsThreeDots } from "react-icons/bs";

function HomeOwner({
  id,
  name,
  image,
  timestamp,
  location,
  phone,
  email,
  onEdit,
  onDelete,
}) {
  const [dropdown, setDropdown] = useState(false);
  let time = new Date(parseInt(timestamp));

  useEffect(() => {
    let isSubscribed = true;
    const closeDropdown = (e) => {
      if (e.path[1].className !== "ownerMoreIcon") {
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
    <div className="owner">
      <div className="ownerContent">
        <img src={image} alt="" className="ownerImage" />
        <div className="ownerContentInfo">
          <div className="ownerContentInfoSegments">
            <div className="ownerContentInfoSegment">
              <span className="ownerId">{id}</span>
              <span className="ownerSegmentMainText">{name}</span>
              <span className="ownerTimestamp">
                joined on {time.toLocaleDateString()},{" "}
                {TimeFormat(parseInt(timestamp))}{" "}
              </span>
            </div>
            <div className="ownerContentInfoSegment">
              <span className="ownerSegmentTitle">Location</span>
              <span className="ownerSegmentMainText">{location}</span>
            </div>
            <div className="ownerContentInfoSegment">
              <span className="ownerSegmentTitle">Phone Number</span>
              <span className="ownerSegmentMainText">{phone}</span>
            </div>
            <div className="ownerContentInfoSegment">
              <span className="ownerSegmentTitle">Email Address</span>
              <span className="ownerSegmentMainText">{email}</span>
            </div>
          </div>
          <div className="ownerContentInfoButton">Payment History</div>
        </div>
        <div className="ownerMore" onClick={()=>setDropdown(true)}>
          <div className="ownerMoreIcon" >
            <BsThreeDots />
          </div>
          {dropdown && (
            <div className="ownerDropdown">
              <span className="ownerDropdownChoice" onClick={onEdit}>
                Edit Home Owner
              </span>
              <span className="ownerDropdownChoice" onClick={onDelete}>
                Delete Home Owner
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeOwner;
