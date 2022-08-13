import React, { useEffect, useRef, useState } from "react";
import "./Announcements.css";
import Header from "../../../components/loggedinStack/Header";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../../../reducers/sidebarReducer";
import Pagination from "../../../components/loggedinStack/common/pagination/Pagination";
import { useNavigate } from "react-router-dom";
import { announcements } from "../../../data/announcements";
import { BsChevronLeft } from "react-icons/bs";
import Announcement from "../../../components/loggedinStack/announcements/announcement/Announcement";

function Announcements() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listRef = useRef();
  const [items, setItems] = useState([]);
  const data = announcements;

  useEffect(() => {
    dispatch(setActiveTab("announcemnets"));
  }, []);
  return (
    <div className="announcements loadedPage">
      <Header pageName="Announcements" />
      <div className="board">
        <div className="boardContent">
          <div className="announcementsHeader">
            <div className="announcementsHeaderLeft">
                News/ Announcements
            </div>
            <div className="announcementsHeaderRight">
              <div
                className="announcementHeaderButtonRight"
                onClick={() => {
                  // navigate("/users/announcements/addannouncement")
                }}
              >
                + Add news
              </div>
            </div>
          </div>
          <div className="announcementsContent">
            <span ref={listRef}></span>
            <div className="announcementsAnnouncements">
              {items.map((item, index) => (
                <Announcement
                  key={index}
                  title={item.title}
                  image={item.image}
                  news={item.news}
                />
              ))}
            </div>
          </div>
          <div className="announcementsPageContainer">
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

export default Announcements;
