import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import homeOwner from "../reducers/homeOwnerReducer";
import sidebarReducer from "../reducers/sidebarReducer"
import tenantReducer from "../reducers/tenantReducer";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    auth: authReducer,
    tenant: tenantReducer,
    homeOwner: homeOwner,
  },
});

export default store;
