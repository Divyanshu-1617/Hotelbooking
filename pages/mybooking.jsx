import { useDispatch, useSelector } from "react-redux";
import { cancelBooking } from "../service/bookingslice";
import { formatCurrency } from "../util/helpers";

export default function MyBookings() {
  const bookings = useSelector((state) => state.booking.bookings);
  const dispatch = useDispatch();

  if (bookings.length === 0) {
    return (
      <div style={{ padding: 20 }}>
        <h2>My Bookings</h2>
        <p>No bookings found.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>My Bookings</h2>

      {bookings.map((booking) => (
        <div
          key={booking.id}
          style={{
            border: "1px solid #ddd",
            padding: 15,
            marginBottom: 10,
            borderRadius: 5,
          }}
        >
          <h3>{booking.hotelName}</h3>
          <p>Room: {booking.roomType}</p>
          <p>
            Dates: {booking.checkIn} → {booking.checkOut}
          </p>
          <p>Nights: {booking.nights}</p>
          <p>Guests: {booking.guests}</p>
          <p>
            Total Paid: <strong>{formatCurrency(booking.total)}</strong>
          </p>
          <p>Status: {booking.status}</p>

          <button
            style={{
              marginTop: 10,
              background: "red",
              color: "white",
              border: "none",
              padding: "6px 12px",
              cursor: "pointer",
            }}
            onClick={() => dispatch(cancelBooking(booking.id))}
          >
            Cancel Booking
          </button>
        </div>
      ))}
    </div>
  );
}
