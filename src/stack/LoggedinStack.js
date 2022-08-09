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
import AssignProperty from "../screens/loggedinStack/users/tenants/assignProperty/AssignProperty";
import SetServiceCharge from "../screens/loggedinStack/users/tenants/setServiceCharge/SetServiceCharge";
import AddTenantConfirmation from "../screens/loggedinStack/users/tenants/addTenantConfirmation/AddTenantConfirmation";
import AddHomeOwner from "../screens/loggedinStack/users/homeOwners/addHomeOwner/AddHomeOwner";
import AssignHomeOwnerProperty from "../screens/loggedinStack/users/homeOwners/assignProperty/AssignHomeOwnerProperty";
import SetHomeOwnerServiceCharge from "../screens/loggedinStack/users/homeOwners/setHomeOwnerServiceCharge/SetHomeOwnerServiceCharge";
import AddHomeOwnerConfirmation from "../screens/loggedinStack/users/homeOwners/addHomeOwnerConfirmation/AddHomeOwnerConfirmation";
import AddSubscriber from "../screens/loggedinStack/users/subscribers/addSubscriber/AddSubscriber";
import SubscriberProperty from "../screens/loggedinStack/users/subscribers/assignSubscriberProperty/SubscriberProperty";
import SubscriberPropertyPrice from "../screens/loggedinStack/users/subscribers/SubscriberPropertyPrice/SubscriberPropertyPrice";
import AddSubscriberConfirmation from "../screens/loggedinStack/users/subscribers/addSubscriberConfirmation/AddSubscriberConfirmation";
import MakePayment from "../screens/loggedinStack/serviceCharge/makePayment/MakePayment";
import RequestScreen from "../screens/loggedinStack/maintenance/request/RequestScreen";

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
            <Route path="/users/tenants/assignProperty" element={<AssignProperty />} />
            <Route path="/users/tenants/setServiceCharge" element={<SetServiceCharge />} />
            <Route path="/users/tenants/addTenantConfirmation" element={<AddTenantConfirmation />} />

            <Route path="/users/homeOwners" element={<HomeOwners />} />
            <Route path="/users/homeOwners/addHomeOwner" element={<AddHomeOwner />} />
            <Route path="/users/homeOwners/assignHomeOwnerProperty" element={<AssignHomeOwnerProperty />} />
            <Route path="/users/homeOwners/setHomeOwnerServiceCharge" element={<SetHomeOwnerServiceCharge />} />
            <Route path="/users/homeOwners/addHomeOwnerConfirmation" element={<AddHomeOwnerConfirmation />} />

            <Route path="/users/subscribers" element={<Subscribers />} />
            <Route path="/users/subscribers/addSubscriber" element={<AddSubscriber />} />
            <Route path="/users/subscribers/assignSubscriberProperty" element={<SubscriberProperty />} />
            <Route path="/users/subscribers/setSubscriberPropertyPrice" element={<SubscriberPropertyPrice />} />
            <Route path="/users/subscribers/addSubscriberConfirmation" element={<AddSubscriberConfirmation />} />

            {/* property routes */}
            <Route path="/property/addProperty" element={<AddProperty />} />
            <Route path="/property/properties" element={<Properties />} />
            <Route path="/property/developments" element={<Developments />} />

            {/* subscriptions routes */}
            <Route path="/subscriptions" element={<Subscriptions />} />

            {/* serviceCharge routes */}
            <Route path="/serviceCharge" element={<ServiceCharge />} />
            <Route path="/serviceCharge/makePayment/:serviceChargeId" element={<MakePayment />} />

            {/* maintenance Routes */}
            <Route path="/requests" element={<Requests />} />
            <Route path="/requests/requestScreen/:requestId" element={<RequestScreen />} />

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
