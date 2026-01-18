import { useState } from "react";
import HotelCard from "../component/hotelcard";
import hotelsData from "../store/hotelsData";

const ITEMS_PER_PAGE = 4;

export default function Hotels() {
  const [city, setCity] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const [results, setResults] = useState(hotelsData);
  const [error, setError] = useState("");

  // ✅ NEW
  const [view, setView] = useState("grid"); // grid | list
  const [page, setPage] = useState(1);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!city.trim()) {
      setError("City is required");
      return;
    }

    if (!checkIn || !checkOut || checkIn >= checkOut) {
      setError("Invalid date range");
      return;
    }

    setError("");

    const filtered = hotelsData.filter((hotel) => {
      const cityMatch = hotel.city
        .toLowerCase()
        .includes(city.toLowerCase());

      const availabilityMatch =
        checkIn >= hotel.availableFrom &&
        checkOut <= hotel.availableTo;

      return cityMatch && availabilityMatch;
    });

    setResults(filtered);
    setPage(1); // reset pagination
  };

  // ✅ PAGINATION LOGIC
  const totalPages = Math.ceil(results.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginatedHotels = results.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div style={{ padding: 20 }}>
      <h2>Search Hotels</h2>

      {/* 🔍 SEARCH BAR */}
      <form
        onSubmit={handleSearch}
        style={{ display: "flex", gap: 10, flexWrap: "wrap" }}
      >
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
        <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />

        <input
          type="number"
          min="1"
          placeholder="Guests"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
        />

        <button type="submit">Search</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* 🔁 GRID / LIST TOGGLE */}
      <div style={{ marginTop: 20 }}>
        <button onClick={() => setView("grid")} disabled={view === "grid"}>
          Grid View
        </button>
        <button onClick={() => setView("list")} disabled={view === "list"}>
          List View
        </button>
      </div>

      {/* 🏨 HOTEL LIST */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            view === "grid" ? "repeat(auto-fill, minmax(250px, 1fr))" : "1fr",
          gap: 20,
          marginTop: 20,
        }}
      >
        {paginatedHotels.length === 0 ? (
          <p>No hotels found</p>
        ) : (
          paginatedHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} view={view} />
          ))
        )}
      </div>

      {/* 📄 PAGINATION CONTROLS */}
      {totalPages > 1 && (
        <div style={{ marginTop: 20 }}>
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Prev
          </button>

          <span style={{ margin: "0 10px" }}>
            Page {page} of {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
