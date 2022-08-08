import React, { useEffect, useRef, useState } from "react";
import Header from "../../../../components/loggedinStack/Header";
import { subscribers } from "../../../../data/subscribers";
import "./Subscribers.css";
import { useNavigate } from "react-router-dom";
import Pagination from "../../../../components/loggedinStack/common/pagination/Pagination";
import InfoCard from "../../../../components/loggedinStack/common/infoCard/InfoCard";
import OrdersHeader from "../../../../components/loggedinStack/common/orders/ordersHeader/OrdersHeader";
import Order from "../../../../components/loggedinStack/common/orders/order/Order";
import { useDispatch } from "react-redux"
import { setActiveTab } from "../../../../reducers/sidebarReducer";

function Subscribers() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [selectAll, setSelectAll] = useState(false);
  const [select, setSelect] = useState(false);
  const [items, setItems] = useState([]);
  const listRef = useRef();
  const data = subscribers;

  useEffect(()=>{
    dispatch(setActiveTab("subscribers"))
  },[])

  return (
    <div className="subscribers loadedPage">
      <Header pageName="Subscribers" />
      <div className="board">
        <div className="boardContent">
          <div className="subscribersContent">
            <div className="subscribersContentHeader">
              <div
                className="addSubscriberButton"
                onClick={() => navigate("/users/subscribers/addSubscriber")}
              >
                +Add Subscriber
              </div>
              <div className="subscribersInfoCards">
                <InfoCard title="Total Subscribers" value={623} icon="person" />
                <InfoCard title="Total Transactions" value={982} icon="money" />
              </div>
            </div>
            <span ref={listRef}></span>
            <div className="subscribersSubscribers">
              <div className="subscriberList">
                <div className="subscriberListHeader">
                  <OrdersHeader check={selectAll} setCheck={setSelectAll} />
                </div>
                {items.map((item, index) => (
                  <Order
                    key={index}
                    id={item.id}
                    date={item.timeStamp}
                    name={item.name}
                    property={item.property}
                    location={item.location}
                    price={item.price}
                    type={item.type}
                    status={item.status}
                    selectAll={selectAll}
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

export default Subscribers;
