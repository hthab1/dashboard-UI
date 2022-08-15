import React, { useEffect, useState } from "react";
import "./EditProfile.css";
import { useDispatch } from "react-redux";
import Header from "../../../../components/loggedinStack/Header";
import { setActiveTab } from "../../../../reducers/sidebarReducer";
import { BsChevronLeft } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import AddStaffForm from "../../../../components/loggedinStack/staff/addStaffForm/AddStaffForm";
import ChangePasswordForm from "../../../../components/loggedinStack/settings/changePasswordForm/ChangePasswordForm";

function ChangePassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    dispatch(setActiveTab("settings"));
  }, []);

  return (
    <div className="addStaff loadedPage">
      <Header pageName="Settings" />
      <div className="board">
        <div className="boardContent">
          <div className="editProfileContent">
            <div className="editProfileContentHeader">
              <div className="editProfileBack" onClick={() => navigate(-1)}>
                <BsChevronLeft />
              </div>
              Change Password
            </div>
            <div className="editProfileContentForm">
              <ChangePasswordForm
                confirmPassword={confirmPassword}
                newPassword={newPassword}
                oldPassword={oldPassword}
                setConfirmPassword={setConfirmPassword}
                setNewPassword={setNewPassword}
                setOldPassword={setOldPassword}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
