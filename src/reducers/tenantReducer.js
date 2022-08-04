import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalInfo: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
  propertyInfo: {
    estate: "",
    property: "",
    apartment: "",
  },
  servicePlan: {
    serviceChargePlan: "",
    rentalFee: "",
    serviceCharge: "",
    startDate: "",
  },
};

export const tenant = createSlice({
  name: "tenant",
  initialState,
  reducers: {
    setPersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    setPropertyInfo: (state, action) => {
      state.propertyInfo = action.payload;
    },
    setServicePlan: (state, action) => {
      state.servicePlan = action.payload;
    },
  },
});

export const { setPersonalInfo, setPropertyInfo, setServicePlan } =
  tenant.actions;

export default tenant.reducer;
