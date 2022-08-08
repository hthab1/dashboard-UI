import React, { useEffect } from "react";
import "./Announcements.css"
import Header from "../../../components/loggedinStack/Header";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../../../reducers/sidebarReducer";

function Announcements() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab("announcemnets"));
  }, []);
  return (
    <div className="announcements loadedPage">
      <Header pageName="Announcements" />
    </div>
  );
}

export default Announcements;
