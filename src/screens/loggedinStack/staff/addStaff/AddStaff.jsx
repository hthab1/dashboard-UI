import React, { useEffect, useState } from "react";
import "./AddStaff.css";
import { useDispatch } from "react-redux";
import Header from "../../../../components/loggedinStack/Header";
import { setActiveTab } from "../../../../reducers/sidebarReducer";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import AddStaffForm from "../../../../components/loggedinStack/staff/addStaffForm/AddStaffForm";

function AddStaff() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [role, setRole] = useState("")
  const [image, setImage] = useState("")

  useEffect(() => {
    dispatch(setActiveTab("staff"));
  }, []);

  return (
    <div className="addStaff loadedPage">
      <Header pageName="Add Staff" />
      <div className="board">
        <div className="boardContent">
          <div className="addStaffContent">
            <div className="addStaffContentHeader">
              <div className="addStaffBack" onClick={() => navigate(-1)}>
                <BsChevronLeft />
              </div>
              Add Staff
            </div>
            <div className="addStaffContentForm">
              <AddStaffForm
                firstName={firstName}
                lastName={lastName}
                email={email}
                phone={phone}
                role={role}
                image={image}
                setImage={setImage}
                setFirstName={setFirstName}
                setLastName={setLastName}
                setEmail={setEmail}
                setPhone={setPhone}
                setRole={setRole}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStaff;

