import { useParams, Link } from "react-router-dom";
import hotelsData from "../store/hotelsData";
import { formatCurrency } from "../util/helpers";
import { useState } from "react";

export default function HotelDetail() {
  const { id } = useParams();
  const hotel = hotelsData.find((h) => h.id === Number(id));

  const [activeImage, setActiveImage] = useState(0);

  if (!hotel) {
    return <p>Hotel not found</p>;
  }

  return (
    <div style={{ padding: 20 }}>
      {/* Image Gallery */}
      <img
        src={hotel.images[activeImage]}
        alt={hotel.name}
        width="100%"
        height="300"
        style={{ objectFit: "cover", borderRadius: 8 }}
      />

      <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
        {hotel.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            width="80"
            height="60"
            style={{
              cursor: "pointer",
              border:
                activeImage === index ? "2px solid blue" : "1px solid #ccc",
            }}
            onClick={() => setActiveImage(index)}
          />
        ))}
      </div>

      {/* Hotel Info */}
      <h2 style={{ marginTop: 20 }}>{hotel.name}</h2>
      <p>{hotel.city}</p>
      <p>
        ⭐ {hotel.rating} ({hotel.reviews} reviews)
      </p>

      {/* Amenities */}
      <h3>Amenities</h3>
      <div>
        {hotel.amenities.map((a) => (
          <span
            key={a}
            style={{
              marginRight: 10,
              padding: "4px 8px",
              border: "1px solid #ccc",
            }}
          >
            {a.toUpperCase()}
          </span>
        ))}
      </div>

      {/* Rooms */}
      <h3 style={{ marginTop: 20 }}>Available Rooms</h3>
      {hotel.rooms.map((room, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            padding: 10,
            marginTop: 10,
          }}
        >
          <p><strong>{room.type}</strong></p>
          <p>{formatCurrency(room.price)} / night</p>

          <Link to={`/booking/${hotel.id}?room=${room.type}`}>
            <button>Book Now</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
