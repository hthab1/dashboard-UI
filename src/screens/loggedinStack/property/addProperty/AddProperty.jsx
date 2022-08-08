import React, { useEffect } from "react";
import Header from "../../../../components/loggedinStack/Header";
import "./AddProperty.css";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../../../../reducers/sidebarReducer";

function AddProperty() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab("add property"));
  }, []);
  return (
    <div className="addProperty loadedPage">
      <Header pageName="Add Property" />
    </div>
  );
}

export default AddProperty;
