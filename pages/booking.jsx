import { useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";
import hotelsData from "../store/hotelsData";
import {
  calculateNights,
  calculatePrice,
  formatCurrency,
} from "../util/helpers";
import { useDispatch } from "react-redux";
import { addBooking } from "../service/bookingslice";

export default function Booking() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const selectedRoomType = searchParams.get("room");

  const hotel = hotelsData.find((h) => h.id === Number(id));
  const room = hotel.rooms.find((r) => r.type === selectedRoomType);

  const dispatch = useDispatch();

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guestName, setGuestName] = useState("");
  const [guests, setGuests] = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  if (!hotel || !room) {
    return <p>Invalid booking details</p>;
  }

  const nights =
    checkIn && checkOut ? calculateNights(checkIn, checkOut) : 0;

  const price =
    nights > 0 ? calculatePrice(room.price, nights) : null;

  const handleBooking = () => {
    if (!checkIn || !checkOut || !guestName) {
      alert("Please fill all details");
      return;
    }

    const booking = {
      id: Date.now(),
      hotelName: hotel.name,
      roomType: room.type,
      checkIn,
      checkOut,
      nights,
      total: price.total,
      guestName,
      guests,
      status: "Confirmed",
    };

    dispatch(addBooking(booking));
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div style={{ padding: 20 }}>
        <h2>🎉 Booking Confirmed!</h2>
        <p>{hotel.name}</p>
        <p>
          {room.type} room for {nights} night(s)
        </p>
        <p>Total Paid: {formatCurrency(price.total)}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 20, maxWidth: 600 }}>
      <h2>Booking Details</h2>

      <p>
        <strong>{hotel.name}</strong> — {room.type}
      </p>

      {/* Dates */}
      <div>
        <label>Check-in</label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>

      <div>
        <label>Check-out</label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>

      {/* Guests */}
      <div>
        <label>Guests</label>
        <input
          type="number"
          min="1"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
        />
      </div>

      {/* Guest Name */}
      <div>
        <label>Guest Name</label>
        <input
          type="text"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
        />
      </div>

      {/* Price Breakdown */}
      {price && (
        <div style={{ border: "1px solid #ddd", padding: 10, marginTop: 15 }}>
          <p>Nights: {nights}</p>
          <p>Base: {formatCurrency(price.subtotal)}</p>
          <p>Tax (12%): {formatCurrency(price.tax)}</p>
          <h3>Total: {formatCurrency(price.total)}</h3>
        </div>
      )}

      <button style={{ marginTop: 15 }} onClick={handleBooking}>
        Confirm Booking
      </button>
    </div>
  );
}
