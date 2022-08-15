import React, { useEffect } from "react";
import "./Settings.css";
import Header from "../../../components/loggedinStack/Header";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../../../reducers/sidebarReducer";
import { useNavigate } from "react-router-dom";

function Settings() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const firstName = "John";
  const lastName = "Smith";
  const phone = "0956427897";
  const email = "john.doe@gmail.com";
  const image =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
  const role = "Staff";

  useEffect(() => {
    dispatch(setActiveTab("settings"));
  }, []);
  return (
    <div className="settings loadedPage">
      <Header pageName="Settings" />
      <div className="board">
        <div className="boardContent">
          <div className="settingsHeader">
            <div className="settingsHeaderLeft">Account</div>
            <div className="settingsHeaderRight">
              <div
                className="settingHeaderButtonRight"
                onClick={() => {
                  navigate("/settings/editProfile", {
                    state: {
                      profile: {
                        firstName: firstName,
                        lastName: lastName,
                        role: role,
                        phone: phone,
                        email: email,
                        image: image,
                      },
                    },
                  });
                }}
              >
                Edit Profile
              </div>
            </div>
          </div>
          <div className="settingsContent">
            <div className="settingssettings">
              <img src={image} alt="" className="settingsAccountImage" />
              <div className="settingsAccountInfo">
                <div className="settingsAccountTitle">First Name</div>
                <div className="settingsAccountDetail">{firstName}</div>
                <div className="settingsAccountTitle">Last Name</div>
                <div className="settingsAccountDetail">{lastName}</div>
                <div className="settingsAccountTitle">Role</div>
                <div className="settingsAccountDetail">{role}</div>
                <div className="settingsAccountTitle">Email Address</div>
                <div className="settingsAccountDetail">j{email}</div>
                <div className="settingsAccountTitle">Phone Number</div>
                <div className="settingsAccountDetail">0576435567</div>
              </div>
              <div
                className="settingHeaderButtonRight settingsAccountButtonBottom"
                onClick={() => navigate("/settings/changePassword")}
              >
                Change Password
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
