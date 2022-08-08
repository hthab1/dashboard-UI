import React, { useEffect, useRef, useState } from "react";
import Header from "../../../components/loggedinStack/Header";
import "./ServiceCharge.css";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../../../reducers/sidebarReducer";
import { useNavigate } from "react-router-dom";
import { subscribers } from "../../../data/subscribers";
import InfoCard from "../../../components/loggedinStack/common/infoCard/InfoCard";
import OrdersHeader from "../../../components/loggedinStack/common/orders/ordersHeader/OrdersHeader";
import Pagination from "../../../components/loggedinStack/common/pagination/Pagination";
import Order from "../../../components/loggedinStack/common/orders/order/Order";
import { MoneyFormat } from "../../../components/functions/Format";

function ServiceCharge() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false);
  const [select, setSelect] = useState(false);
  const [items, setItems] = useState([]);
  const listRef = useRef();
  const data = subscribers;

  useEffect(() => {
    dispatch(setActiveTab("service charge"));
  }, []);
  return (
    <div className="serviceCharge loadedPage">
      <Header pageName="Service Charge" />
      <div className="board">
        <div className="boardContent">
          <div className="serviceChargeContent">
            <div className="serviceChargeContentHeader">
              <div className="serviceChargeInfoCards">
                <InfoCard title="Monthly Payments" value={623} />
                <InfoCard title="Monthly Transactions" value={623} />
                <InfoCard title="Total Payments" value={623} icon="person" />
                <InfoCard
                  title="Total Transactions"
                  value={MoneyFormat(98000000)}
                  icon="money"
                />
              </div>
            </div>
            <span ref={listRef}></span>
            <div className="serviceChargeServiceCharge">
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
                    customerType="Tenant"
                    serviceCharge
                    onMakePayment={() =>
                      navigate(`/serviceCharge/makePayment/${item.id}`, {
                        state: {
                          serviceCharge: item,
                        },
                      })
                    }
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

export default ServiceCharge;
