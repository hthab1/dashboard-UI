import React, { useEffect, useState } from "react";
import "./EditProfile.css";
import { useDispatch } from "react-redux";
import Header from "../../../../components/loggedinStack/Header";
import { setActiveTab } from "../../../../reducers/sidebarReducer";
import { BsChevronLeft } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import AddStaffForm from "../../../../components/loggedinStack/staff/addStaffForm/AddStaffForm";

function EditProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const profile = location.state.profile;
  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  const [email, setEmail] = useState(profile.email);
  const [phone, setPhone] = useState(profile.phone);
  const [role, setRole] = useState(profile.role);
  const [image, setImage] = useState(profile.image)

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
              Edit Profile
            </div>
            <div className="editProfileContentForm">
              <AddStaffForm
                firstName={firstName}
                lastName={lastName}
                email={email}
                phone={phone}
                role={role}
                image={image}
                setFirstName={setFirstName}
                setLastName={setLastName}
                setEmail={setEmail}
                setPhone={setPhone}
                setRole={setRole}
                setImage={setImage}
                buttonName="Update profile"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
