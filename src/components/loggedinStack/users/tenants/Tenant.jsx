import React from "react";
import "./Tenant.css";
import { BsFillTelephoneFill, BsThreeDotsVertical } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";

function Tenant({ id, image, name, location }) {
  return (
    <div className="card tenant">
      <div className="tenantContent">
        <div className="tenantTop">
          <div className="tenantTopImageContainer">
            <img src={image} alt="" className="tenantImage" />
            <div className="tenantOnline"></div>
          </div>
          <div className="tenantNameContainer">
            <span className="tenantName">{name}</span>
            <span className="tenantId">{id}</span>
            <div className="tenantContactContainer">
              <div className="tenantContact">
                <BsFillTelephoneFill />
              </div>
              <div className="tenantContact">
                <AiFillMessage />
              </div>
            </div>
          </div>
          <div className="tenantMore">
            <BsThreeDotsVertical />
          </div>
        </div>
        <div className="tenantBottom">
            <span className="tenantBottomTitle">Location</span>
            <span className="tenantBottomLocation">{location}</span>
        </div>
      </div>
    </div>
  );
}

export default Tenant;
