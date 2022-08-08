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
    </div>
  );
}

export default VisitorsPass;
