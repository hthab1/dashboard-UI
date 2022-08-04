import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import sidebarReducer from "../reducers/sidebarReducer"
import tenantReducer from "../reducers/tenantReducer";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    auth: authReducer,
    tenant: tenantReducer
  },
});

export default store;
