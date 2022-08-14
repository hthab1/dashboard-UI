import React, { useEffect, useState, useRef } from "react";
import Header from "../../../components/loggedinStack/Header";
import "./Subscriptions.css";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../../../reducers/sidebarReducer";
import { useNavigate } from "react-router-dom";
import InfoCard from "../../../components/loggedinStack/common/infoCard/InfoCard";
import Pagination from "../../../components/loggedinStack/common/pagination/Pagination";
import { MoneyFormat } from "../../../components/functions/Format";
import { BsFilter } from "react-icons/bs";
import { IoMdRefresh } from "react-icons/io";
import FilterDropdown from "../../../components/loggedinStack/users/common/filterDropdown/FilterDropdown";
import Search from "../../../components/loggedinStack/common/search/Search";
import { transactions } from "../../../data/transactions";
import SubscriptionsHeader from "../../../components/loggedinStack/subscriptions/subscriptionsHeader/SubscriptionsHeader";
import SubscriptionCard from "../../../components/loggedinStack/subscriptions/subscriptionsCard/SubscriptionCard";

function Subscriptions() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const options = [
    "Newest",
    "This Week",
    "Last Week",
    "Last Month",
    "Confirmed",
    "Pending",
  ];
  const [selected, setSelected] = useState(options[0]);
  const [dropdown, setDropdown] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [select, setSelect] = useState(false);
  const [items, setItems] = useState([]);
  const listRef = useRef();
  const data = transactions;

  useEffect(() => {
    dispatch(setActiveTab("subscriptions"));
  }, []);
  return (
    <div className="subscriptions loadedPage">
      <Header pageName="Subscriptions" />
      <div className="board">
        <div className="boardContent">
          <div className="subscriptionsContent">
            <div className="subscriptionsContentHeader">
              
            </div>
            <span ref={listRef}></span>
            <div className="subscriptionsRowHeader">
              <div className="subscriptionsRowHeaderLeft">
                <div className="subscriptionsRowSearch">
                  <Search
                    placeholder="Search here..."
                    backgroundColor="#ffffff"
                  />
                </div>
              </div>
              <div className="subscriptionsRowHeaderRight">
                <FilterDropdown
                  selected={selected}
                  setSelected={setSelected}
                  dropdown={dropdown}
                  setDropdown={setDropdown}
                  options={options}
                />
                <div className="subscriptionsRowFilterButton">
                  <span className="subscriptionsRowFilterIcon">
                    <BsFilter />
                  </span>
                  <span className="subscriptionsRowFilterLabel">Filter</span>
                </div>
                <div className="subscriptionsRowRefresh">
                  <IoMdRefresh />
                </div>
              </div>
            </div>
            <div className="subscriptionssubscriptions">
              <div className="subscriptionsList">
                <div className="subscriptionsListHeader">
                  <SubscriptionsHeader check={selectAll} setCheck={setSelectAll} />
                </div>
                {items.map((item, index) => (
                  <SubscriptionCard
                    key={index}
                    id={item.id}
                    user={item.name}
                    date={item.timeStamp}
                    amount={item.paymentAmount}
                    method={item.paymentMethod}
                    plan={item.paymentPlan}
                    property={item.property}
                    selectAll={selectAll}
                    status={item.status}
                  />
                ))}
              </div>
            </div>
          </div>
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
  );
}

export default Subscriptions;
