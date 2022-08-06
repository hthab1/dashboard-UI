import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homeOwnerPersonalInfo: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
  homeOwnerPropertyInfo: {
    estate: "",
    property: "",
    apartment: "",
  },
  homeOwnerServicePlan: {
    serviceChargePlan: "",
    rentalFee: "",
    serviceCharge: "",
    startDate: "",
  },
};

export const homeOwner = createSlice({
  name: "homeOwner",
  initialState,
  reducers: {
    setHomeOwnerPersonalInfo: (state, action) => {
      state.homeOwnerPersonalInfo = action.payload;
    },
    setHomeOwnerPropertyInfo: (state, action) => {
      state.homeOwnerPropertyInfo = action.payload;
    },
    setHomeOwnerServicePlan: (state, action) => {
      state.homeOwnerServicePlan = action.payload;
    },
  },
});

export const { setHomeOwnerPersonalInfo, setHomeOwnerPropertyInfo, setHomeOwnerServicePlan } =
  homeOwner.actions;

export default homeOwner.reducer;
