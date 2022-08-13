import React, { useEffect, useRef, useState } from "react";
import "./Staff.css";
import Header from "../../../components/loggedinStack/Header";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../../../reducers/sidebarReducer";
import Pagination from "../../../components/loggedinStack/common/pagination/Pagination";
import { staff } from "../../../data/staff";
import Search from "../../../components/loggedinStack/common/search/Search";
import { useNavigate } from "react-router-dom";
import StaffCard from "../../../components/loggedinStack/staff/staffCard/StaffCard";

function Staff() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listRef = useRef();
  const [items, setItems] = useState([]);
  const data = staff;
  const role = "Admin";

  useEffect(() => {
    dispatch(setActiveTab("staff"));
  }, []);
  return (
    <div className="staff loadedPage">
      <Header pageName="Staff" />
      <div className="board">
        <div className="boardContent">
          <div className="staffHeader">
            <div className="staffHeaderLeft">
              <Search backgroundColor="#ffffff" />
            </div>
            <div className="staffHeaderRight">
              {role === "Admin" && (
                <div
                  className="tenantHeaderButtonRight"
                  onClick={() => {
                    navigate("/staff/addStaff");
                  }}
                >
                  + Add new Staff
                </div>
              )}
            </div>
          </div>
          <div className="staffContent">
            <span ref={listRef}></span>
            <div className="staffStaff">
              {items.map((item, index) => (
                <StaffCard
                  key={index}
                  id={item.id}
                  name={item.firstName + " " + item.lastName}
                  image={item.image}
                  role={item.role}
                  phone={item.phone}
                  email={item.email}
                  onEdit={() => {
                    navigate(`/staff/editStaff/${item.id}`, {
                      state: {
                        staff: item,
                      },
                    });
                  }}
                />
              ))}
            </div>
          </div>
          <div className="staffPageContainer">
            <Pagination
              itemsPerPage={10}
              items={data}
              setCurrentItems={setItems}
              onPageChange={() => {
                listRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staff;
