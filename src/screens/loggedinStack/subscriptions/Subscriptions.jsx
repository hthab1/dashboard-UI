import React, { useEffect } from "react";
import Header from "../../../components/loggedinStack/Header";
import "./Subscriptions.css";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../../../reducers/sidebarReducer";

function Subscriptions() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab("subscriptions"));
  }, []);
  return (
    <div className="subscriptions loadedPage">
      <Header pageName="Subscriptions" />
    </div>
  );
}

export default Subscriptions;
