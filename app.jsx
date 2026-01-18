import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Hotels from "./pages/hotels";
import HotelDetail from "./pages/hoteldetail";
import Booking from "./pages/booking";
import Profile from "./pages/profile";
import MyBookings from "./pages/mybookings";
import Login from "./pages/login";
import Signup from "./pages/signup";

import ProtectedRoute from "./component/protectedroute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:id" element={<HotelDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes */}
        <Route
          path="/booking/:id"
          element={
            <ProtectedRoute>
              <Booking />
            </ProtectedRoute>
          }
        />

        <Route
          path="/bookings"
          element={
            <ProtectedRoute>
              <MyBookings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
