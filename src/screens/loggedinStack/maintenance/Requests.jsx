import React, { useEffect, useState } from "react";
import Header from "../../../components/loggedinStack/Header";
import "./Requests.css";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../../../reducers/sidebarReducer";
import Search from "../../../components/loggedinStack/common/search/Search";

function Requests() {
  const dispatch = useDispatch();
  const [active, setActive] = useState("all");

  useEffect(() => {
    dispatch(setActiveTab("maintenance"));
  }, []);
  return (
    <div className="requests loadedPage">
      <Header pageName="Requests" />
      <div className="board">
        <div className="boardContent">
          <div className="requestsHeader">
            <div className="requestsSearch">
              <Search placeholder="Search for request" />
            </div>
            <div className="requestsCategories">
              <span
                className="requestCategory"
                onClick={() => setActive("all")}
                style={{
                  color: active === "all" && "#016a5f",
                  borderBottomWidth: active === "all" && 4,
                  borderBottomColor: active === "all" && "#016a5f",
                }}
              >
                All
              </span>
              <span
                className="requestCategory"
                onClick={() => setActive("open")}
                style={{
                  color: active === "open" && "#016a5f",
                  borderBottomWidth: active === "open" && 4,
                  borderBottomColor: active === "open" && "#016a5f",
                }}
              >
                Open
              </span>
              <span
                className="requestCategory"
                onClick={() => setActive("closed")}
                style={{
                  color: active === "closed" && "#016a5f",
                  borderBottomWidth: active === "closed" && 4,
                  borderBottomColor: active === "closed" && "#016a5f",
                }}
              >
                Closed
              </span>
            </div>
            <div className="requestsFilterButtons">
              <div className="requestsFilterButton">Filter By Property</div>
              <div className="requestsFilterButton requestsFilterButtonDate">
                Filter By Date
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Requests;
