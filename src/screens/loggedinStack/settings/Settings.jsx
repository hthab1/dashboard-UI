import React, { useEffect } from "react";
import Header from "../../../components/loggedinStack/Header";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../../../reducers/sidebarReducer";

function Settings() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab("settings"));
  }, []);
  return (
    <div className="settings loadedPage">
      <Header pageName="Settings" />
    </div>
  );
}

export default Settings;
