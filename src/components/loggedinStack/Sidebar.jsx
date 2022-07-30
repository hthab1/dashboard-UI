import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../assets/Logo.svg";
import { FiGrid, FiHome } from "react-icons/fi";
import {
  AiFillCaretRight,
  AiOutlineTag,
  AiOutlineShoppingCart,
  AiOutlineSetting,
} from "react-icons/ai";
import {
  BsPerson,
  BsBookshelf,
  BsMegaphone,
  BsPower,
  BsDoorOpen,
} from "react-icons/bs";
import { BiWrench } from "react-icons/bi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import SidebarOption from "./SidebarOption";
import { useSelector, useDispatch } from "react-redux";
import { setActiveTab, setMobileSidebar } from "../../reducers/sidebarReducer";
import { setUser } from "../../reducers/authReducer";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const active = useSelector((state) => state.sidebar.active);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [users, setUsers] = useState(false);
  const [property, setProperty] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(setUser(""));
    dispatch(setActiveTab("dashboard"));
    dispatch(setMobileSidebar(false));
    navigate("/");
  };

  return (
    <div className="sidebar">
      <img src={Logo} alt="" className="sidebarLogo" />
      <div className="sidebarMenus">
        <SidebarOption
          name="Dashboard"
          icon={<FiGrid />}
          active={active === "dashboard" && true}
          onClick={() => {
            dispatch(setActiveTab("dashboard"));
            dispatch(setMobileSidebar(false));
            navigate("/dashboard");
          }}
        />
        <SidebarOption
          name="Users"
          hasSubMenu
          icon={<BsPerson />}
          active={
            (active === "tenants" ||
              active === "home owners" ||
              active === "subscribers") &&
            true
          }
          onClick={() => {
            if (
              active !== "tenants" &&
              active !== "home owners" &&
              active !== "subscribers"
            ) {
              setUsers(!users);
            }
          }}
        />
        {(users ||
          active === "tenants" ||
          active === "home owners" ||
          active === "subscribers") && (
          <>
            <SidebarOption
              name="Tenants"
              subMenu
              active={active === "tenants" && true}
              onClick={() => {
                dispatch(setActiveTab("tenants"));
                dispatch(setMobileSidebar(false));
                navigate("/users/tenants");
              }}
            />
            <SidebarOption
              name="Home Owners"
              subMenu
              active={active === "home owners" && true}
              onClick={() => {
                dispatch(setActiveTab("home owners"));
                dispatch(setMobileSidebar(false));
                navigate("/users/homeOwners");
              }}
            />
            <SidebarOption
              name="Subscribers"
              subMenu
              active={active === "subscribers" && true}
              onClick={() => {
                dispatch(setActiveTab("subscribers"));
                dispatch(setMobileSidebar(false));
                navigate("/users/subscribers");
              }}
            />
          </>
        )}

        <SidebarOption
          name="Property"
          hasSubMenu
          icon={<FiHome />}
          active={
            (active === "add property" ||
              active === "view properties" ||
              active === "manage developments") &&
            true
          }
          onClick={() => {
            if (
              active !== "add property" &&
              active !== "view properties" &&
              active !== "manage developments"
            ) {
              setProperty(!property);
            }
          }}
        />
        {(property ||
          active === "add property" ||
          active === "view properties" ||
          active === "manage developments") && (
          <>
            <SidebarOption
              name="Add Property"
              subMenu
              active={active === "add property" && true}
              onClick={() => {
                dispatch(setActiveTab("add property"));
                dispatch(setMobileSidebar(false));
                navigate("/property/addProperty");
              }}
            />
            <SidebarOption
              name="View Properties"
              subMenu
              active={active === "view properties" && true}
              onClick={() => {
                dispatch(setActiveTab("view properties"));
                dispatch(setMobileSidebar(false));
                navigate("/property/properties");
              }}
            />
            <SidebarOption
              name="Manage Developments"
              subMenu
              active={active === "manage developments" && true}
              onClick={() => {
                dispatch(setActiveTab("manage developments"));
                dispatch(setMobileSidebar(false));
                navigate("/property/developments");
              }}
            />
          </>
        )}

        <SidebarOption
          name="Subscriptions"
          icon={<AiOutlineTag />}
          active={active === "subscriptions" && true}
          onClick={() => {
            dispatch(setActiveTab("subscriptions"));
            dispatch(setMobileSidebar(false));
            navigate("/subscriptions");
          }}
        />
        <SidebarOption
          name="Service Charge"
          icon={<AiOutlineShoppingCart />}
          service={27}
          active={active === "service charge" && true}
          onClick={() => {
            dispatch(setActiveTab("service charge"));
            dispatch(setMobileSidebar(false));
            navigate("/serviceCharge");
          }}
        />
        <SidebarOption
          name="Maintenance"
          icon={<BiWrench />}
          active={active === "maintenance" && true}
          onClick={() => {
            dispatch(setActiveTab("maintenance"));
            dispatch(setMobileSidebar(false));
            navigate("/requests");
          }}
        />
        <SidebarOption
          name="Visitors Pass"
          icon={<BsDoorOpen />}
          active={active === "visitors pass" && true}
          onClick={() => {
            dispatch(setActiveTab("visitors pass"));
            dispatch(setMobileSidebar(false));
            navigate("/visitorsPass");
          }}
        />
        <SidebarOption
          name="Inventory"
          icon={<BsBookshelf />}
          active={active === "inventory" && true}
          onClick={() => {
            dispatch(setActiveTab("inventory"));
            dispatch(setMobileSidebar(false));
            navigate("/inventory");
          }}
        />
        <SidebarOption
          name="Announcements"
          icon={<BsMegaphone />}
          active={active === "announcemnets" && true}
          onClick={() => {
            dispatch(setActiveTab("announcemnets"));
            dispatch(setMobileSidebar(false));
            navigate("/announcements");
          }}
        />
        <SidebarOption
          name="Settings"
          icon={<AiOutlineSetting />}
          active={active === "settings" && true}
          onClick={() => {
            dispatch(setActiveTab("settings"));
            dispatch(setMobileSidebar(false));
            navigate("/settings");
          }}
        />
        <SidebarOption
          name="Staff"
          icon={<MdOutlinePeopleAlt />}
          active={active === "staff" && true}
          onClick={() => {
            dispatch(setActiveTab("staff"));
            dispatch(setMobileSidebar(false));
            navigate("/staff");
          }}
        />
        <SidebarOption
          name="Logout"
          icon={<BsPower />}
          onClick={handleLogout}
        />
      </div>
    </div>
  );
}

export default Sidebar;
