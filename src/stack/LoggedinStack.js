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
import AllVisitors from "../screens/loggedinStack/visitorsPass/visitors/AllVisitors";
import VisitorList from "../screens/loggedinStack/visitorsPass/visitors/VisitorList";
import AllInventory from "../screens/loggedinStack/inventory/allInventory/AllInventory";
import AddProduct from "../screens/loggedinStack/inventory/addProduct/AddProduct";
import EditProduct from "../screens/loggedinStack/inventory/addProduct/EditProduct";
import Transactions from "../screens/loggedinStack/transactions/Transactions";
import AddStaff from "../screens/loggedinStack/staff/addStaff/AddStaff";
import EditStaff from "../screens/loggedinStack/staff/addStaff/EditStaff";
import AddNews from "../screens/loggedinStack/announcements/addNews/AddNews";
import EditNews from "../screens/loggedinStack/announcements/addNews/EditNews";
import ViewProperties from "../screens/loggedinStack/property/viewProperties/ViewProperties";
import ViewProperty from "../screens/loggedinStack/property/viewProperties/ViewProperty";
import ViewManageProperty from "../screens/loggedinStack/property/viewProperties/ViewManageProperty";
import AddDevelopment from "../screens/loggedinStack/property/addProperty/AddDevelopment";
import EditDevelopment from "../screens/loggedinStack/property/addProperty/EditDevelopment";
import EditProperty from "../screens/loggedinStack/property/addProperty/EditProperty";
import EditDevelopmentProperty from "../screens/loggedinStack/property/addProperty/EditDevelopmentProperty";

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
            <Route
              path="/users/tenants/assignProperty"
              element={<AssignProperty />}
            />
            <Route
              path="/users/tenants/setServiceCharge"
              element={<SetServiceCharge />}
            />
            <Route
              path="/users/tenants/addTenantConfirmation"
              element={<AddTenantConfirmation />}
            />

            <Route path="/users/homeOwners" element={<HomeOwners />} />
            <Route
              path="/users/homeOwners/addHomeOwner"
              element={<AddHomeOwner />}
            />
            <Route
              path="/users/homeOwners/assignHomeOwnerProperty"
              element={<AssignHomeOwnerProperty />}
            />
            <Route
              path="/users/homeOwners/setHomeOwnerServiceCharge"
              element={<SetHomeOwnerServiceCharge />}
            />
            <Route
              path="/users/homeOwners/addHomeOwnerConfirmation"
              element={<AddHomeOwnerConfirmation />}
            />

            <Route path="/users/subscribers" element={<Subscribers />} />
            <Route
              path="/users/subscribers/addSubscriber"
              element={<AddSubscriber />}
            />
            <Route
              path="/users/subscribers/assignSubscriberProperty"
              element={<SubscriberProperty />}
            />
            <Route
              path="/users/subscribers/setSubscriberPropertyPrice"
              element={<SubscriberPropertyPrice />}
            />
            <Route
              path="/users/subscribers/addSubscriberConfirmation"
              element={<AddSubscriberConfirmation />}
            />

            {/* property routes */}
            <Route path="/property/addProperty" element={<AddProperty />} />
            <Route path="/property/properties" element={<Properties />} />
            <Route
              path="/property/properties/viewProperty/:propertyId"
              element={<ViewProperty />}
            />
            <Route
              path="/property/properties/editProperty/:editPropertyId"
              element={<EditProperty />}
            />
            <Route
              path="/property/developments/editProperty/:editDevelopmentPropertyId"
              element={<EditDevelopmentProperty />}
            />
            <Route path="/property/developments" element={<Developments />} />
            <Route
              path="/property/developments/addDevelopment"
              element={<AddDevelopment />}
            />
            <Route
              path="/property/developments/editDevelopment/:editDevelopmentId"
              element={<EditDevelopment />}
            />
            <Route
              path="/property/developments/properties/:developmentId"
              element={<ViewProperties />}
            />
            <Route
              path="/property/developments/properties/viewProperty/:viewPropertyId"
              element={<ViewManageProperty />}
            />

            {/* subscriptions routes */}
            <Route path="/subscriptions" element={<Subscriptions />} />

            {/* serviceCharge routes */}
            <Route path="/serviceCharge" element={<ServiceCharge />} />
            <Route
              path="/serviceCharge/makePayment/:serviceChargeId"
              element={<MakePayment />}
            />

            {/* transactions routes */}
            <Route path="/transactions" element={<Transactions />} />

            {/* maintenance Routes */}
            <Route path="/requests" element={<Requests />} />
            <Route
              path="/requests/requestScreen/:requestId"
              element={<RequestScreen />}
            />

            {/* visitorsPass Routes */}
            <Route path="/visitorsPass" element={<VisitorsPass />} />
            <Route path="/visitorsPass/allVisitors" element={<AllVisitors />} />
            <Route
              path="/visitorsPass/visitorList/:visitorListId"
              element={<VisitorList />}
            />

            {/* inventory Routes */}
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/inventory/viewInventory" element={<AllInventory />} />
            <Route path="/inventory/addProduct" element={<AddProduct />} />
            <Route
              path="/inventory/editProduct/:productId"
              element={<EditProduct />}
            />

            {/* announcements Routes */}
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/announcements/addNews" element={<AddNews />} />
            <Route
              path="/announcements/editNews/:newsId"
              element={<EditNews />}
            />

            {/* settings Routes */}
            <Route path="/settings" element={<Settings />} />

            {/* staff Routes */}
            <Route path="/staff" element={<Staff />} />
            <Route path="/staff/addStaff" element={<AddStaff />} />
            <Route path="/staff/editStaff/:staffId" element={<EditStaff />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default LoggedinStack;
