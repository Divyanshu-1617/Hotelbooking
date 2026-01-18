import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    bookings: JSON.parse(localStorage.getItem("bookings")) || [],
  },
  reducers: {
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
      localStorage.setItem("bookings", JSON.stringify(state.bookings));
    },
    cancelBooking: (state, action) => {
      state.bookings = state.bookings.filter(
        (b) => b.id !== action.payload
      );
      localStorage.setItem("bookings", JSON.stringify(state.bookings));
    },
  },
});

export const { addBooking, cancelBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
