import React, { useEffect } from "react";
import "./Inventory.css"
import Header from "../../../components/loggedinStack/Header";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../../../reducers/sidebarReducer";

function Inventory() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab("inventory"));
  }, []);
  return (
    <div className="inventory loadedPage">
      <Header pageName="Inventory" />
    </div>
  );
}

export default Inventory;
