import React, { useEffect, useRef, useState } from "react";
import "./Inventory.css";
import Header from "../../../components/loggedinStack/Header";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../../../reducers/sidebarReducer";
import { itemRequests } from "../../../data/itemRequests";
import Pagination from "../../../components/loggedinStack/common/pagination/Pagination";
import ItemRequestsHeader from "../../../components/loggedinStack/inventory/itemRequestsHeader/ItemRequestsHeader";
import ItemRequest from "../../../components/loggedinStack/inventory/itemRequest/ItemRequest";
import { useNavigate } from "react-router-dom";

function Inventory() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [selectAll, setSelectAll] = useState(false);
  const [items, setItems] = useState([]);
  const data = itemRequests;
  const listRef = useRef();

  useEffect(() => {
    dispatch(setActiveTab("inventory"));
  }, []);
  return (
    <div className="inventory loadedPage">
      <Header pageName="Inventory" />
      <div className="board">
        <div className="boardContent">
          <div className="inventoryRequest">
            <div className="inventoryRequestHeader">
              <span ref={listRef}></span>
              <div className="inventoryRequestHeaderContent">
                <div className="inventoryRequestHeaderLeft">Item Requests</div>
                <span className="inventoryRequestHeaderContenButton" onClick={()=>navigate("/inventory/viewInventory")}>
                  View Inventory
                </span>
              </div>
            </div>
            <div className="inventoryRequestContent">
              <div className="inventoryRequestContentHeader">
                <ItemRequestsHeader check={selectAll} setCheck={setSelectAll} />
              </div>
              {items.map((item, index) => (
                <ItemRequest
                  key={index}
                  name={item.name}
                  id={item.id}
                  items={item.itemsRequested}
                  noOfItems={item.itemsRequested?.length}
                  property={item.property}
                  status={item.status}
                  selectAll={selectAll}
                />
              ))}
            </div>
          </div>
          <Pagination
            itemsPerPage={5}
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

export default Inventory;
