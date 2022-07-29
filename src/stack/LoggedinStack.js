import React from "react";
import "./LoggedinStack.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "../components/loggedinStack/Sidebar";
import Home from "../screens/loggedinStack/Home";
import { useStateValue } from "../StateProvider";

function LoggedinStack() {
  const { state, dispatch } = useStateValue();

  return (
    <Router>
      <div
        className="loggedinStack"
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100vh",
          width: "100%",
        }}
      >
        <div className="sidebarDesktop">
          <Sidebar />
        </div>
        {state.sidebarOpen && (
          <div className="sidebarMobile">
            <div className="sidebarMobileVail"></div>
            <Sidebar />
          </div>
        )}
        <div
          onClick={() => {
            dispatch({
              type: "SET_SIDEBAR",
              sidebarOpen: false,
            });
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default LoggedinStack;
