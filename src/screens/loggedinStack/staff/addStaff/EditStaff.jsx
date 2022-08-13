import React, { useEffect, useState } from "react";
import "./AddStaff.css";
import { useDispatch } from "react-redux";
import Header from "../../../../components/loggedinStack/Header";
import { setActiveTab } from "../../../../reducers/sidebarReducer";
import { BsChevronLeft } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import AddStaffForm from "../../../../components/loggedinStack/staff/addStaffForm/AddStaffForm";

function EditStaff() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const staff = location.state.staff;
  const [firstName, setFirstName] = useState(staff.firstName);
  const [lastName, setLastName] = useState(staff.lastName);
  const [email, setEmail] = useState(staff.role);
  const [phone, setPhone] = useState(staff.phone);
  const [role, setRole] = useState(staff.role);

  useEffect(() => {
    dispatch(setActiveTab("staff"));
  }, []);

  return (
    <div className="addStaff loadedPage">
      <Header pageName="Edit Staff" />
      <div className="board">
        <div className="boardContent">
          <div className="addStaffContent">
            <div className="addStaffContentHeader">
              <div className="addStaffBack" onClick={() => navigate(-1)}>
                <BsChevronLeft />
              </div>
              Edit Staff
            </div>
            <div className="addStaffContentForm">
              <AddStaffForm
                firstName={firstName}
                lastName={lastName}
                email={email}
                phone={phone}
                role={role}
                image={staff.image}
                setFirstName={setFirstName}
                setLastName={setLastName}
                setEmail={setEmail}
                setPhone={setPhone}
                setRole={setRole}
                buttonName="Update Staff"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditStaff;
