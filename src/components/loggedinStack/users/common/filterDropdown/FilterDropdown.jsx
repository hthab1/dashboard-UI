import React, { useEffect, useState } from "react";
import "./FilterDropdown.css";
import { BsChevronDown } from "react-icons/bs";

function FilterDropdown({
  dropdown,
  setDropdown,
  selected,
  setSelected,
  options,
}) {
  useEffect(
    (e) => {
      let isSubscribed = true;
      const closeDropdown = (e) => {
        if (e.path[0].className !== "filterDropdownBackground") {
          setDropdown(false);
        }
      };
      if (isSubscribed) {
        if (dropdown) {
          document.body.addEventListener("click", closeDropdown);
        }
      }
      return () => {
        isSubscribed = false;
        if (dropdown) {
          document.body.removeEventListener("click", closeDropdown);
        }
      };
    },
    [dropdown]
  );

  return (
    <div className="filterDropdown">
      <div
        className="filterDropdownBackground"
        onClick={(e) => {
          setDropdown(true);
        }}
      ></div>
      <span>{selected}</span>
      <span>
        <BsChevronDown />
      </span>
      {dropdown && (
        <div className="filterDropdownDropdown">
          {options.map((option, index) => (
            <span
              key={index}
              onClick={() => {
                setDropdown(false);
                setSelected(option);
              }}
            >
              {option}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterDropdown;
