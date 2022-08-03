import React from "react";
import "./LoggedinStack.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "../components/loggedinStack/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { setMobileSidebar } from "../reducers/sidebarReducer";
import Dashboard from "../screens/loggedinStack/dashboard/Dashboard";
import Tenants from "../screens/loggedinStack/users/tenants/Tenants";
import Subscribers from "../screens/loggedinStack/users/subscribers/Subscribers";
import HomeOwners from "../screens/loggedinStack/users/homeOwners/HomeOwners";
import ServiceCharge from "../screens/loggedinStack/serviceCharge/ServiceCharge";
import Requests from "../screens/loggedinStack/maintenance/Requests";
import VisitorsPass from "../screens/loggedinStack/visitorsPass/VisitorsPass";
import Inventory from "../screens/loggedinStack/inventory/Inventory";
import Announcements from "../screens/loggedinStack/announcements/Announcements";
import Settings from "../screens/loggedinStack/settings/Settings";
import Staff from "../screens/loggedinStack/staff/Staff";
import AddProperty from "../screens/loggedinStack/property/addProperty/AddProperty";
import Properties from "../screens/loggedinStack/property/viewProperties/Properties";
import Developments from "../screens/loggedinStack/property/manageDevelopments/Developments";
import Subscriptions from "../screens/loggedinStack/subscriptions/Subscriptions";
import AddTenants from "../screens/loggedinStack/users/tenants/addTenant/AddTenants";

function LoggedinStack() {
  const on = useSelector((state) => state.sidebar.mobileSidebar);
  const dispatch = useDispatch();

  return (
    <Router>
      <div className="loggedinStack">
        <div className="sidebarDesktop">
          <Sidebar />
        </div>
        {on && (
          <div className="sidebarMobile">
            <Sidebar />
          </div>
        )}
        <div
          className="page"
          onClick={() => {
            on && dispatch(setMobileSidebar(false));
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* users routes */}
            <Route path="/users/tenants" element={<Tenants />} />
            <Route path="/users/tenants/addTenant" element={<AddTenants />} />

            <Route path="/users/homeOwners" element={<HomeOwners />} />
            <Route path="/users/subscribers" element={<Subscribers />} />

            {/* property routes */}
            <Route path="/property/addProperty" element={<AddProperty />} />
            <Route path="/property/properties" element={<Properties />} />
            <Route path="/property/developments" element={<Developments />} />

            {/* subscriptions routes */}
            <Route path="/subscriptions" element={<Subscriptions />} />

            {/* serviceCharge routes */}
            <Route path="/serviceCharge" element={<ServiceCharge />} />

            {/* maintenance Routes */}
            <Route path="/requests" element={<Requests />} />

            {/* visitorsPass Routes */}
            <Route path="/visitorsPass" element={<VisitorsPass />} />

            {/* inventory Routes */}
            <Route path="/inventory" element={<Inventory />} />

            {/* announcements Routes */}
            <Route path="/announcements" element={<Announcements />} />

            {/* settings Routes */}
            <Route path="/settings" element={<Settings />} />

            {/* staff Routes */}
            <Route path="/staff" element={<Staff />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default LoggedinStack;
