import React, { useRef, useState } from "react";
import "./Tenants.css";
import Header from "../../../../components/loggedinStack/Header.jsx";
import Search from "../../../../components/loggedinStack/common/search/Search";
import Pagination from "../../../../components/loggedinStack/common/pagination/Pagination";
import Tenant from "../../../../components/loggedinStack/users/tenants/Tenant";
import { tenants } from "../../../../data/tenants";
import { useNavigate } from "react-router-dom";

function Tenants() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const listRef = useRef();
  const data = tenants;

  return (
    <div className="tenants loadedPage">
      <Header pageName="Tenants" />
      <div className="board">
        <div className="boardContent">
          <div className="tenantsHeader">
            <div className="tenantsHeaderLeft">
              <Search backgroundColor="#ffffff" />
            </div>
            <div className="tenantsHeaderRight">
              <div className="tenantHeaderButtonLeft">Filter by date</div>
              <div className="tenantHeaderButtonRight" onClick={()=>{
                navigate("/users/tenants/addTenant")
              }}>+ Add new tenant</div>
            </div>
          </div>
          <div className="tenantsContent">
            <span ref={listRef}></span>
            <div className="tenantsTenants">
              {items.map((item, index) => (
                <Tenant
                  key={index}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  location={item.location}
                />
              ))}
            </div>
          </div>
          <div className="tenantsPageContainer">
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

export default Tenants;
