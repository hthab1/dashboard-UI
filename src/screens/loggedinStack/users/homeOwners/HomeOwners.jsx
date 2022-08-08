import React, { useEffect, useRef, useState } from "react";
import Header from "../../../../components/loggedinStack/Header";
import Search from "../../../../components/loggedinStack/common/search/Search";
import FilterDropdown from "../../../../components/loggedinStack/users/common/filterDropdown/FilterDropdown";
import "./HomeOwners.css";
import { BsFilter } from "react-icons/bs";
import { IoMdRefresh } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { homeOwners } from "../../../../data/homeOwners";
import Pagination from "../../../../components/loggedinStack/common/pagination/Pagination";
import HomeOwner from "../../../../components/loggedinStack/users/homeOwners/homeOwner/HomeOwner";
import { useDispatch } from "react-redux"
import { setActiveTab } from "../../../../reducers/sidebarReducer";

function HomeOwners() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [dropdown, setDropdown] = useState(false);
  const [selected, setSelected] = useState("Newest");
  const options = ["Relevant", "Newest", "Time"];
  const [owners, setOwners] = useState([]);
  const listRef = useRef();
  const data = homeOwners;

  useEffect(()=>{
    dispatch(setActiveTab("home owners"))
  },[])

  return (
    <div className="homeOwners loadedPage">
      <Header pageName="Home Owners" />
      <div className="board">
        <div className="boardContent">
          <div className="homeOwnerHeader">
            <div className="homeOwnerHeaderLeft">
              <div
                className="homeOwerAddButton"
                onClick={() => {
                  navigate("/users/homeOwners/addHomeOwner");
                }}
              >
                +New Home Owner
              </div>
              <div className="homeOwnerSearch">
                <Search
                  placeholder="Search for customers"
                  backgroundColor="#ffffff"
                />
              </div>
            </div>
            <div className="homeOwnerHeaderRight">
              <FilterDropdown
                selected={selected}
                setSelected={setSelected}
                dropdown={dropdown}
                setDropdown={setDropdown}
                options={options}
              />
              <div className="homeOwnerFilterButton">
                <span className="homeOwnerFilterIcon">
                  <BsFilter />
                </span>
                <span className="homeOwnerFilterLabel">Filter</span>
              </div>
              <div className="homeOwnerRefresh">
                <IoMdRefresh />
              </div>
            </div>
          </div>
          <div className="homeOwnerContent">
            <span ref={listRef}></span>
            <div className="homeOwnerOwners">
              {owners.map((item, index) => (
                <HomeOwner
                  key={index}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  timestamp={item.timestamp}
                  location={item.location}
                  phone={item.phone}
                  email={item.email}
                />
              ))}
            </div>
          </div>
          <div className="homeOwnerPageContainer">
            <Pagination
              itemsPerPage={6}
              items={data}
              setCurrentItems={setOwners}
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

export default HomeOwners;
