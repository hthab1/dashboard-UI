import React, { useEffect } from "react";
import "./VisitorsPass.css"
import Header from "../../../components/loggedinStack/Header";
import { setActiveTab } from "../../../reducers/sidebarReducer";
import {useDispatch} from "react-redux"

function VisitorsPass() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab("visitors pass"));
  }, []);
  return (
    <div className="visitorsPass loadedPage">
      <Header pageName="Visitors Pass" />
      <div className="board">
        <div className="boardContent">
          <div className="visitorsPassHeader">
            <div className="visitorsPassHeaderButton">View all visitors</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisitorsPass;
