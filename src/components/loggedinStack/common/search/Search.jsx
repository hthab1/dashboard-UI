import React from "react";
import "./Search.css";
import { FiSearch } from "react-icons/fi";

function Search({ searchValue, onSearchChange, backgroundColor, placeholder }) {
  return (
    <div
      className="searchContainer"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="search">
        <input
          type="text"
          className="searchInput"
          placeholder={placeholder ? placeholder : "Search here..."}
          value={searchValue}
          onChange={onSearchChange}
        />
      </div>
      <div className="searchIcon">
        <FiSearch />
      </div>
    </div>
  );
}

export default Search;
