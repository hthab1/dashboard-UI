import React from "react";
import "./Sidebar.css";
import { AiFillCaretRight } from "react-icons/ai";

function SidebarOption({
  icon,
  name,
  onClick,
  active,
  subMenu,
  service,
  hasSubMenu,
}) {
  return (
    <div
      className="sidebarMenu"
      style={{
        backgroundColor: active && !subMenu ? "#016a5f" : "transparent",
      }}
      onClick={onClick}
    >
      <div
        className="sidebarMenuIcon"
        style={{
          color:
            active && !subMenu
              ? "#ffffff"
              : active && subMenu
              ? "#016a5f"
              : "#717579",
        }}
      >
        {icon}
      </div>
      <span
        className="sidebarMenuName"
        style={{
          color:
            active && !subMenu
              ? "#ffffff"
              : active && subMenu
              ? "#09BD3C"
              : "#717579",
        }}
      >
        {name}
      </span>
      {hasSubMenu && (
        <div
          className="sidebarMenuArrow"
          style={{ color: active && "#ffffff" }}
        >
          <AiFillCaretRight />
        </div>
      )}
      {service && (
        <div className="sidebarMenuService">
          <span className="sidebarMenuServiceNumber">{service}</span>
        </div>
      )}
    </div>
  );
}

export default SidebarOption;
