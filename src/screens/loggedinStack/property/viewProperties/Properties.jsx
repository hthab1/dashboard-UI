import React, { useEffect, useRef, useState } from "react";
import "./Properties.css";
import Header from "../../../../components/loggedinStack/Header";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../../../../reducers/sidebarReducer";
import { useNavigate } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import { announcements } from "../../../../data/announcements";
import Announcement from "../../../../components/loggedinStack/announcements/announcement/Announcement";
import Pagination from "../../../../components/loggedinStack/common/pagination/Pagination";
import Property from "../../../../components/loggedinStack/properties/property/Property";
import { properties } from "../../../../data/properties";

function Properties() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listRef = useRef();
  const [items, setItems] = useState([]);
  const data = properties;

  useEffect(() => {
    dispatch(setActiveTab("view properties"));
  }, []);
  return (
    <div className="properties loadedPage">
      <Header pageName="Properties" />
      <div className="board">
        <div className="boardContent">
          <div className="viewPropertiesHeader">
            <div className="viewPropertiesHeaderLeft">View Properties</div>
            
          </div>
          <div className="viewPropertiesContent">
            <span ref={listRef}></span>
            <div className="viewPropertiesviewProperties">
              {items.map((item, index) => (
                <Property
                  key={index}
                  development={item.development}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  propertyType={item.propertyType}
                  serviceType={item.serviceType}
                  unit={item.unit}
                  // onEdit={() =>
                  //   navigate(`/viewProperties/editNews/${item.id}`, {
                  //     state: {
                  //       news: item,
                  //     },
                  //   })
                  // }
                />
              ))}
            </div>
          </div>
          <div className="viewPropertiesPageContainer">
            <Pagination
              itemsPerPage={10}
              items={data}
              setCurrentItems={setItems}
              onPageChange={() => {
                listRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Properties;
