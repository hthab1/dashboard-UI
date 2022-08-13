import React, { useEffect, useRef, useState } from "react";
import "./AllInventory.css";
import { useDispatch } from "react-redux";
import Pagination from "../../../../components/loggedinStack/common/pagination/Pagination";
import Header from "../../../../components/loggedinStack/Header";
import { setActiveTab } from "../../../../reducers/sidebarReducer";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import InventoryHeader from "../../../../components/loggedinStack/inventory/inventoryHeader/InventoryHeader";
import InventoryProduct from "../../../../components/loggedinStack/inventory/inventoryProduct/InventoryProduct";
import { products } from "../../../../data/products";

function AllInventory() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectAll, setSelectAll] = useState(false);
  const [items, setItems] = useState([]);
  const data = products;
  const listRef = useRef();

  useEffect(() => {
    dispatch(setActiveTab("inventory"));
  }, []);
  return (
    <div className="allInventory loadedPage">
      <Header pageName="Inventory" />
      <div className="board">
        <div className="boardContent">
          <div className="allInventoryRequest">
            <div className="allInventoryRequestHeader">
              <span ref={listRef}></span>
              <div className="allInventoryRequestHeaderContent">
                <div className="allInventoryRequestHeaderLeft">
                  <div
                    className="allInventoryHeaderBack"
                    onClick={() => navigate(-1)}
                  >
                    <BsChevronLeft />
                  </div>
                  Product List
                </div>
                <span
                  className="allInventoryRequestHeaderContenButton"
                  onClick={() => navigate("/inventory/addProduct")}
                >
                  Add Product
                </span>
              </div>
            </div>
            <div className="allInventoryRequestContent">
              <div className="allInventoryRequestContentHeader">
                <InventoryHeader check={selectAll} setCheck={setSelectAll} />
              </div>
              {items.map((item, index) => (
                <InventoryProduct
                  key={index}
                  name={item.name}
                  id={item.id}
                  available={item.available}
                  price={item.price}
                  selectAll={selectAll}
                  onEdit={() => {
                    navigate(`/inventory/editProduct/${item.id}`, {
                      state: {
                        product: item,
                      },
                    });
                  }}
                />
              ))}
            </div>
          </div>
          <Pagination
            itemsPerPage={6}
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

export default AllInventory;
