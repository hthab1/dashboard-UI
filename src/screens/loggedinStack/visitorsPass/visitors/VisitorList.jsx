import React, { useEffect, useRef, useState } from "react";
import Header from "../../../../components/loggedinStack/Header";
import "./Visitors.css";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../../../../reducers/sidebarReducer";
import Pagination from "../../../../components/loggedinStack/common/pagination/Pagination";
import { visitorList } from "../../../../data/visitorList";
import VisitorsHeader from "../../../../components/loggedinStack/visitorsPass/visitorsHeader/VisitorsHeader";
import InfoCard from "../../../../components/loggedinStack/common/infoCard/InfoCard";
import VisitorCard from "../../../../components/loggedinStack/visitorsPass/visitor/VisitorCard";

function VisitorList() {
  const dispatch = useDispatch();
  const listRef = useRef();
  const [selectAll, setSelectAll] = useState(false);
  const [items, setItems] = useState([]);
  const data = visitorList;

  useEffect(() => {
    dispatch(setActiveTab("visitors pass"));
  }, []);

  return (
    <div className="loadedPage visitors">
      <Header pageName="Visitor List" />
      <div className="board">
        <div className="boardContent">
          <div className="visitorsContent">
            <div className="visitorsVisitors">
              <div className="visitorsList">
                <div className="visitorsListHeader">
                  <VisitorsHeader />
                </div>
              </div>
              <span ref={listRef}></span>
              {items.map((item, index) => (
                <VisitorCard
                  key={index}
                  accessCode={item.accessCode}
                  address={item.location}
                  date={item.timeStamp}
                  id={item.id}
                  host={item.host}
                  phone={item.phone}
                  selectAll={selectAll}
                  status={item.status}
                  validity={item.validity}
                  visitor={item.name}
                />
              ))}
            </div>
          </div>
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
  );
}

export default VisitorList;
