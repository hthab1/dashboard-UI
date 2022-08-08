import React, { useEffect } from "react";
import "./Properties.css";
import Header from "../../../../components/loggedinStack/Header";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../../../../reducers/sidebarReducer";

function Properties() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab("view properties"));
  }, []);
  return (
    <div className="properties loadedPage">
      <Header pageName="Properties" />
    </div>
  );
}

export default Properties;
