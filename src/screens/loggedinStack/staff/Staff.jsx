import React, { useEffect } from "react";
import Header from "../../../components/loggedinStack/Header";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../../../reducers/sidebarReducer";

function Staff() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab("staff"));
  }, []);
  return (
    <div className="staff loadedPage">
      <Header pageName="Staff" />
    </div>
  );
}

export default Staff;
