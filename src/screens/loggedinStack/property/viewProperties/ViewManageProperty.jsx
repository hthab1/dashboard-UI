import React, { useEffect, useRef, useState } from "react";
import "./Properties.css";
import Header from "../../../../components/loggedinStack/Header";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../../../../reducers/sidebarReducer";
import { useNavigate, useLocation } from "react-router-dom";
import Pagination from "../../../../components/loggedinStack/common/pagination/Pagination";
import Property from "../../../../components/loggedinStack/properties/property/Property";
import { properties } from "../../../../data/properties";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { MoneyFormat } from "../../../../components/functions/Format";

function ViewManageProperty() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const property = location.state.property;
  const description = property.description;
  const price = property.price;
  const name = property.name;
  const place = property.location;
  const gallery = property.gallery;
  const listRef = useRef();
  const galleryRef = useRef();
  const [items, setItems] = useState([]);
  const data = properties;

  useEffect(() => {
    dispatch(setActiveTab("manage developments"));
  }, []);

  const handleScroll = () => {
    galleryRef.current.scrollLeft += 20;
  };


  return (
    <div className="properties loadedPage">
      <Header pageName="Developments" />
      <div className="board">
        <div className="boardContent">
          <div className="viewPropertiesHeader">
            <div className="viewPropertiesHeaderLeft">
              <div className="viewPropertiesBack" onClick={() => navigate(-1)}>
                <BsChevronLeft />
              </div>
              View Property
            </div>
          </div>
          <div className="viewPropertyContainer">
            <div className="viewPropertiesProperty">
              <div className="viewPropertiesPropertyHeader">
                <div className="viewPropertiesPropertyHeaderLeft">
                  <div className="viewPropertiesPropertyName">{name}</div>
                  <div className="viewPropertiesPropertyPriceContainer">
                    <div className="viewPropertiesPropertyPrice">
                      {MoneyFormat(price)}
                    </div>
                    <div className="viewPropertiesPropertyPriceTag">12</div>
                  </div>
                </div>
                <div className="viewPropertiesPropertyHeaderRight">
                  Available
                </div>
              </div>
              <div className="viewPropertyDetailsContainer">
                <div className="viewPropertyDetailsTitle">Description</div>
                <div className="viewPropertyDetailsDetail">{description}</div>
                <div className="viewPropertyDetailsTitle">Gallery</div>
                <div className="viewPropertiesGallery">
                  <div
                    className="viewPropertyGalleryArrow"
                    onClick={handleScroll}
                  >
                    <BsChevronRight />
                  </div>
                  <div className="viewPropertiesGallerySlider" ref={galleryRef}>
                    {gallery?.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt=""
                        className="viewPropertyGalleryImage"
                      />
                    ))}
                  </div>
                </div>
                <div className="viewPropertyDetailsTitle">Location</div>
                <div className="viewPropertyDetailsDetail">{place}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewManageProperty;
