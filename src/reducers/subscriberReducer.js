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
    amount: "",
    startDate: "",
    dueDate: "",
  },
};

export const subscriber = createSlice({
  name: "subscriber",
  initialState,
  reducers: {
    setSubscriberPersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    setSubscriberPropertyInfo: (state, action) => {
      state.propertyInfo = action.payload;
    },
    setSubscriberServicePlan: (state, action) => {
      state.servicePlan = action.payload;
    },
  },
});

export const {
  setSubscriberPersonalInfo,
  setSubscriberPropertyInfo,
  setSubscriberServicePlan,
} = subscriber.actions;

export default subscriber.reducer;
