import React, { useState } from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import { HiMenu, HiOutlineChevronDown } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { BsCalendar } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { VscBell, VscMail } from "react-icons/vsc";
import { setMobileSidebar } from "../../reducers/sidebarReducer";

function Header({ pageName, searchValue, onSearchChange }) {
  const dispatch = useDispatch();
  const [info, setInfo] = useState(false);
  const [mobileNotify, setMobileNotify] = useState(false);

  return (
    <div className="header">
      <div className="headerMenuContainer">
        <div
          className="headerMenu"
          onClick={() => {
            dispatch(setMobileSidebar(true));
          }}
        >
          <HiMenu />
        </div>
        <span className="headerMenuName">{pageName}</span>
      </div>
      <div className="headerSearchContainer">
        <div className="headerSearch">
          <input
            type="text"
            className="headerSearchInput"
            placeholder="Search here..."
            value={searchValue}
            onChange={onSearchChange}
          />
        </div>
        <div className="headerSearchIcon">
          <FiSearch />
        </div>
      </div>
      <div className="headerUserContainer">
        <div className="headerIconsContainer">
          <div className="headerIconContainer">
            <div className="headerIconTop headerIconTopBell">12</div>
            <div className="headerIcon">
              <VscBell />
            </div>
          </div>
          <div className="headerIconContainer">
            <div className="headerIconTop headerIconTopMail">1</div>
            <div className="headerIcon headerIconMail">
              <VscMail />
            </div>
          </div>
          <div className="headerIconContainer ">
            <div className="headerIconTop headerIconTopPayment">67</div>
            <div className="headerIcon headerIconPayment">
              <BsCalendar />
            </div>
          </div>
        </div>
        {mobileNotify ? (
          <div className="headerIconsContainer headerIconsContainerMobile">
            <div className="headerIconContainer">
              <div className="headerIconTop headerIconTopBell">12</div>
              <div className="headerIcon">
                <VscBell />
              </div>
            </div>
            <div className="headerIconContainer">
              <div className="headerIconTop headerIconTopMail">1</div>
              <div className="headerIcon headerIconMail">
                <VscMail />
              </div>
            </div>
            <div className="headerIconContainer ">
              <div className="headerIconTop headerIconTopPayment">67</div>
              <div className="headerIcon headerIconPayment">
                <BsCalendar />
              </div>
            </div>
            <div>
              <div
                className="headerIcon "
                onClick={() => setMobileNotify(false)}
              >
                <MdClose />
              </div>
            </div>
          </div>
        ) : (
          <div
            className="headerIconsContainer headerIconsContainerMobile headerChevronDown"
            onClick={() => setMobileNotify(true)}
          >
            <HiOutlineChevronDown />
          </div>
        )}
        <div className="headerUser">
          <img
            src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
            className="headerUserImage"
          />
          <div className="headerUserInfo">
            <span className="headerUserName">Erwin Smith</span>
            <span className="headerUserRole">Super Admin</span>
          </div>
        </div>
        <div
          className="headerUser headerUserMobile "
          onClick={() => setInfo(!info)}
        >
          {info ? (
            <div className="headerUserInfo">
              <span className="headerUserName">Erwin Smith</span>
              <span className="headerUserRole">Super Admin</span>
            </div>
          ) : (
            <img
              src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
              className="headerUserImage"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
