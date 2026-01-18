import { Link } from "react-router-dom";
import { formatCurrency } from "../util/helpers";

export default function HotelCard({ hotel, view = "grid" }) {
  // ✅ Get lowest room price
  const minPrice = Math.min(...hotel.rooms.map((r) => r.price));

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: 15,
        borderRadius: 5,
        display: view === "list" ? "flex" : "block",
        gap: 15,
      }}
    >
      {/* Image */}
      <img
        src={hotel.images[0]}
        alt={hotel.name}
        width={view === "list" ? 180 : "100%"}
        height={140}
        style={{ objectFit: "cover", borderRadius: 5 }}
      />

      {/* Content */}
      <div>
        <h3>{hotel.name}</h3>
        <p>{hotel.city}</p>

        <p>
          ⭐ {hotel.rating} ({hotel.reviews} reviews)
        </p>

        <p>
          <strong>{formatCurrency(minPrice)}</strong> / night
        </p>

        {/* Amenities */}
        <div style={{ marginTop: 5 }}>
          {hotel.amenities.map((a) => (
            <span
              key={a}
              style={{
                fontSize: 12,
                marginRight: 8,
                padding: "2px 6px",
                border: "1px solid #ccc",
              }}
            >
              {a.toUpperCase()}
            </span>
          ))}
        </div>

        {/* Availability */}
        <p style={{ fontSize: 12, marginTop: 6 }}>
          Available: {hotel.availableFrom} → {hotel.availableTo}
        </p>

        <Link to={`/hotels/${hotel.id}`}>
          <button style={{ marginTop: 10 }}>View Details</button>
        </Link>
      </div>
    </div>
  );
}
