import React, { useEffect, useRef, useState } from "react";
import "./VisitorsPass.css";
import Header from "../../../components/loggedinStack/Header";
import { setActiveTab } from "../../../reducers/sidebarReducer";
import { useDispatch } from "react-redux";
import VisitorsPassHeader from "../../../components/loggedinStack/visitorsPass/visitorsPassHeader/VisitorsPassHeader";
import VisitorPass from "../../../components/loggedinStack/visitorsPass/visitorPass/VisitorPass";
import { visitorsPass } from "../../../data/visitorsPass";
import Pagination from "../../../components/loggedinStack/common/pagination/Pagination";
import { useNavigate } from "react-router-dom"

function VisitorsPass() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const listRef = useRef();
  const [selectAll, setSelectAll] = useState(false);
  const [items, setItems] = useState([]);
  const data = visitorsPass;

  useEffect(() => {
    dispatch(setActiveTab("visitors pass"));
  }, []);
  return (
    <div className="visitorsPass loadedPage">
      <Header pageName="Visitors Pass" />
      <div className="board">
        <div className="boardContent">
          <div className="vistorsPassList">
            <div className="visitorsPassHeaderContent">
              <span className="visitorsPassHeaderButton" onClick={()=>navigate("/visitorsPass/allVisitors")}>View All Visitors</span>
            </div>
            <div className="visitorsPassContent">
              <span ref={listRef}></span>
              <div className="visitorsPassContentHeader">
                <VisitorsPassHeader check={selectAll} setCheck={setSelectAll} />
              </div>
              {items.map((item, index) => (
                <VisitorPass
                  key={index}
                  id={item.id}
                  NoOfVisitors={item.noOfVisitors}
                  name={item.name}
                  location={item.location}
                  property={item.property}
                  selectAll={selectAll}
                  status={item.status}
                  accessCode={item.accessCode}
                  host={item.host}
                  phone={item.phone}
                  timestamp={item.timeStamp}
                  validity={item.validity}
                  onViewList={()=>navigate(`/visitorsPass/visitorList/${item.id}`)}
                />
              ))}
            </div>
          </div>
            <Pagination
              itemsPerPage={6}
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

export default VisitorsPass;
