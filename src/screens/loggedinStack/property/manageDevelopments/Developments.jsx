import React, { useEffect, useRef, useState } from "react";
import Header from "../../../../components/loggedinStack/Header";
import "./Developments.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActiveTab } from "../../../../reducers/sidebarReducer";
import Pagination from "../../../../components/loggedinStack/common/pagination/Pagination";
import Property from "../../../../components/loggedinStack/properties/property/Property";
import { properties } from "../../../../data/properties";
import Development from "../../../../components/loggedinStack/properties/development/Development";
import { developments } from "../../../../data/developments";

function Developments() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listRef = useRef();
  const [items, setItems] = useState([]);
  const data = developments;

  useEffect(() => {
    dispatch(setActiveTab("manage developments"));
  }, []);
  return (
    <div className="developments loadedPage">
      <Header pageName="Developments" />
      <div className="board">
        <div className="boardContent">
          <div className="viewDevelopmentsHeader">
            <div className="viewDevelopmentsHeaderLeft">View Developments</div>
            <div className="viewDevelopmentsHeaderRight">
              <div
                className="viewDevelopmentsHeaderButtonRight"
                onClick={() =>
                  navigate("/property/developments/addDevelopment")
                }
              >
                Add Development
              </div>
            </div>
          </div>
          <div className="viewDevelopmentsContent">
            <span ref={listRef}></span>
            <div className="viewDevelopmentsviewDevelopments">
              {items.map((item, index) => (
                <Development
                  key={index}
                  development={item.development}
                  homeOwners={item.homeOwners}
                  location={item.location}
                  properties={item.properties}
                  subscribers={item.subscribers}
                  tenants={item.tenants}
                  image={item.image}
                  onView={() => {
                    navigate(`/property/developments/properties/${item.id}`);
                  }}
                  onEdit={() =>
                    navigate(`/property/developments/editDevelopment/${item.id}`, {
                      state: {
                        development: item,
                      },
                    })
                  }
                />
              ))}
            </div>
          </div>
          <div className="viewDevelopmentsPageContainer">
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

export default Developments;
