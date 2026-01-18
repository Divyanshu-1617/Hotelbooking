import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "../service/bookingslice";
import authReducer from "../service/authslice";

const store = configureStore({
  reducer: {
    booking: bookingReducer, // 👈 IMPORTANT
    auth: authReducer,
  },
});

export default store;

