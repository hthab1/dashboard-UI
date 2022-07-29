import React from "react";
import "./Sidebar.css";
import Logo from "../../assets/Logo.svg";
import { FiGrid } from "react-icons/fi";
import {
  AiFillCaretRight,
  AiOutlineTag,
  AiOutlineShoppingCart,
  AiOutlineSetting,
} from "react-icons/ai";
import { BsPerson, BsBookshelf, BsMegaphone, BsPower } from "react-icons/bs";
import { BiWrench } from "react-icons/bi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { useStateValue } from "../../StateProvider";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  const { state, dispatch } = useStateValue();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_USER",
      user: null,
    });
    dispatch({
      type: "SET_ACTIVE",
      active: "dashboard",
    });
    dispatch({
      type: "SET_SIDEBAR",
      sidebarOpen: false,
    });
  };

  return (
    <div className="sidebar">
      <img src={Logo} alt="" className="sidebarLogo" />
      <div className="sidebarMenus">
        <SidebarOption
          name="Dashboard"
          icon={<FiGrid />}
          active={state.active === "dashboard" && true}
          onClick={() => {
            dispatch({
              type: "SET_ACTIVE",
              active: "dashboard",
            });
            dispatch({
              type: "SET_SIDEBAR",
              sidebarOpen: false,
            });
          }}
        />
        <SidebarOption
          name="Users"
          hasSubMenu
          icon={<BsPerson />}
          active={
            (state.active === "users" ||
              state.active === "tenants" ||
              state.active === "home owners" ||
              state.active === "subscribers") &&
            true
          }
          onClick={() => {
            dispatch({
              type: "SET_ACTIVE",
              active: "users",
            });
          }}
        />
        {(state.active === "users" ||
          state.active === "tenants" ||
          state.active === "home owners" ||
          state.active === "subscribers") && (
          <>
            <SidebarOption
              name="Tenants"
              subMenu
              active={state.active === "tenants" && true}
              onClick={() => {
                dispatch({
                  type: "SET_ACTIVE",
                  active: "tenants",
                });
                dispatch({
                  type: "SET_SIDEBAR",
                  sidebarOpen: false,
                });
              }}
            />
            <SidebarOption
              name="Home Owners"
              subMenu
              active={state.active === "home owners" && true}
              onClick={() => {
                dispatch({
                  type: "SET_ACTIVE",
                  active: "home owners",
                });
                dispatch({
                  type: "SET_SIDEBAR",
                  sidebarOpen: false,
                });
              }}
            />
            <SidebarOption
              name="Subscribers"
              subMenu
              active={state.active === "subscribers" && true}
              onClick={() => {
                dispatch({
                  type: "SET_ACTIVE",
                  active: "subscribers",
                });
                dispatch({
                  type: "SET_SIDEBAR",
                  sidebarOpen: false,
                });
              }}
            />
          </>
        )}

        <SidebarOption
          name="Property"
          hasSubMenu
          icon={<BsPerson />}
          active={
            (state.active === "property" ||
              state.active === "add property" ||
              state.active === "view properties" ||
              state.active === "manage developments") &&
            true
          }
          onClick={() => {
            dispatch({
              type: "SET_ACTIVE",
              active: "property",
            });
          }}
        />
        {(state.active === "property" ||
          state.active === "add property" ||
          state.active === "view properties" ||
          state.active === "manage developments") && (
          <>
            <SidebarOption
              name="Add Property"
              subMenu
              active={state.active === "add property" && true}
              onClick={() => {
                dispatch({
                  type: "SET_ACTIVE",
                  active: "add property",
                });
                dispatch({
                  type: "SET_SIDEBAR",
                  sidebarOpen: false,
                });
              }}
            />
            <SidebarOption
              name="View Properties"
              subMenu
              active={state.active === "view properties" && true}
              onClick={() => {
                dispatch({
                  type: "SET_ACTIVE",
                  active: "view properties",
                });
                dispatch({
                  type: "SET_SIDEBAR",
                  sidebarOpen: false,
                });
              }}
            />
            <SidebarOption
              name="Manage Developments"
              subMenu
              active={state.active === "manage developments" && true}
              onClick={() => {
                dispatch({
                  type: "SET_ACTIVE",
                  active: "manage developments",
                });
                dispatch({
                  type: "SET_SIDEBAR",
                  sidebarOpen: false,
                });
              }}
            />
          </>
        )}

        <SidebarOption
          name="Subscriptions"
          icon={<AiOutlineTag />}
          active={state.active === "subscriptions" && true}
          onClick={() => {
            dispatch({
              type: "SET_ACTIVE",
              active: "subscriptions",
            });
            dispatch({
              type: "SET_SIDEBAR",
              sidebarOpen: false,
            });
          }}
        />
        <SidebarOption
          name="Service Charge"
          icon={<AiOutlineShoppingCart />}
          service={27}
          active={state.active === "service charge" && true}
          onClick={() => {
            dispatch({
              type: "SET_ACTIVE",
              active: "service charge",
            });
            dispatch({
              type: "SET_SIDEBAR",
              sidebarOpen: false,
            });
          }}
        />
        <SidebarOption
          name="Maintenance"
          icon={<BiWrench />}
          active={state.active === "maintenance" && true}
          onClick={() => {
            dispatch({
              type: "SET_ACTIVE",
              active: "maintenance",
            });
            dispatch({
              type: "SET_SIDEBAR",
              sidebarOpen: false,
            });
          }}
        />
        <SidebarOption
          name="Inventory"
          icon={<BsBookshelf />}
          active={state.active === "inventory" && true}
          onClick={() => {
            dispatch({
              type: "SET_ACTIVE",
              active: "inventory",
            });
            dispatch({
              type: "SET_SIDEBAR",
              sidebarOpen: false,
            });
          }}
        />
        <SidebarOption
          name="Announcements"
          icon={<BsMegaphone />}
          active={state.active === "announcemnets" && true}
          onClick={() => {
            dispatch({
              type: "SET_ACTIVE",
              active: "announcemnets",
            });
            dispatch({
              type: "SET_SIDEBAR",
              sidebarOpen: false,
            });
          }}
        />
        <SidebarOption
          name="Settings"
          icon={<AiOutlineSetting />}
          active={state.active === "settings" && true}
          onClick={() => {
            dispatch({
              type: "SET_ACTIVE",
              active: "settings",
            });
            dispatch({
              type: "SET_SIDEBAR",
              sidebarOpen: false,
            });
          }}
        />
        <SidebarOption
          name="Staff"
          icon={<MdOutlinePeopleAlt />}
          active={state.active === "staff" && true}
          onClick={() => {
            dispatch({
              type: "SET_ACTIVE",
              active: "staff",
            });
            dispatch({
              type: "SET_SIDEBAR",
              sidebarOpen: false,
            });
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
