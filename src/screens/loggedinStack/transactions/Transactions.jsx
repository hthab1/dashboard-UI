import React, { useEffect, useRef, useState } from "react";
import "./Transactions.css";
import Header from "../../../components/loggedinStack/Header";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../../../reducers/sidebarReducer";
import { useNavigate } from "react-router-dom";
import { subscribers } from "../../../data/subscribers";
import InfoCard from "../../../components/loggedinStack/common/infoCard/InfoCard";
import OrdersHeader from "../../../components/loggedinStack/common/orders/ordersHeader/OrdersHeader";
import Order from "../../../components/loggedinStack/common/orders/order/Order";
import Pagination from "../../../components/loggedinStack/common/pagination/Pagination";
import { MoneyFormat } from "../../../components/functions/Format";
import { BsFilter } from "react-icons/bs";
import { IoMdRefresh } from "react-icons/io";
import FilterDropdown from "../../../components/loggedinStack/users/common/filterDropdown/FilterDropdown";
import Search from "../../../components/loggedinStack/common/search/Search";
import TransactionsHeader from "../../../components/loggedinStack/transactions/transactionsHeader/TransactionsHeader";
import { transactions } from "../../../data/transactions";
import TransactionCard from "../../../components/loggedinStack/transactions/transactionCard/TransactionCard";

function Transactions() {
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
    dispatch(setActiveTab("transactions"));
  }, []);
  return (
    <div className="transactions loadedPage">
      <Header pageName="Transactions" />
      <div className="board">
        <div className="boardContent">
          <div className="transactionsContent">
            <div className="transactionsContentHeader">
              <div className="transactionsInfoCards">
                <InfoCard title="Number of Transactions" value={623} />
                <InfoCard
                  title="Monthly Income"
                  value={MoneyFormat(62000000)}
                />
                <InfoCard
                  title="Annually Income"
                  value={MoneyFormat(623000000)}
                />
                <InfoCard
                  title="Total Income"
                  value={MoneyFormat(6230000000)}
                />
              </div>
            </div>
            <span ref={listRef}></span>
            <div className="transactionsRowHeader">
              <div className="transactionsRowHeaderLeft">
                <div className="transactionsRowSearch">
                  <Search
                    placeholder="Search here..."
                    backgroundColor="#ffffff"
                  />
                </div>
              </div>
              <div className="transactionsRowHeaderRight">
                <FilterDropdown
                  selected={selected}
                  setSelected={setSelected}
                  dropdown={dropdown}
                  setDropdown={setDropdown}
                  options={options}
                />
                <div className="transactionsRowFilterButton">
                  <span className="transactionsRowFilterIcon">
                    <BsFilter />
                  </span>
                  <span className="transactionsRowFilterLabel">Filter</span>
                </div>
                <div className="transactionsRowRefresh">
                  <IoMdRefresh />
                </div>
              </div>
            </div>
            <div className="transactionstransactions">
              <div className="transactionsList">
                <div className="transactionsListHeader">
                  <TransactionsHeader check={selectAll} setCheck={setSelectAll} />
                </div>
                {items.map((item, index) => (
                  <TransactionCard
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

export default Transactions;
