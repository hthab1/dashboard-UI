import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: "dashboard",
  mobileSidebar: false,
};

export const sidebar = createSlice({
  name: "activeTab",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.active = action.payload;
    },
    setMobileSidebar: (state,action) => {
        state.mobileSidebar = action.payload
    }
  },
});

export const { setActiveTab, setMobileSidebar } = sidebar.actions;

export default sidebar.reducer;
