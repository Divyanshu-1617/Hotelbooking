import { useState } from "react";

export default function Filters({ onFilterChange }) {
  const [filters, setFilters] = useState({
    price: 10000,
    rating: 0,
    amenities: [],
    type: "",
    sort: "",
  });

  const amenitiesList = ["wifi", "pool", "parking", "ac"];

  const handleChange = (key, value) => {
    const updated = { ...filters, [key]: value };
    setFilters(updated);
    onFilterChange(updated);
  };

  const toggleAmenity = (amenity) => {
    const updatedAmenities = filters.amenities.includes(amenity)
      ? filters.amenities.filter((a) => a !== amenity)
      : [...filters.amenities, amenity];

    handleChange("amenities", updatedAmenities);
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: 15, width: 250 }}>
      <h3>Filters</h3>

      {/* Price */}
      <div>
        <label>Max Price: ₹{filters.price}</label>
        <input
          type="range"
          min="1000"
          max="10000"
          step="500"
          value={filters.price}
          onChange={(e) => handleChange("price", Number(e.target.value))}
        />
      </div>

      {/* Rating */}
      <div>
        <label>Minimum Rating</label>
        <select
          value={filters.rating}
          onChange={(e) => handleChange("rating", Number(e.target.value))}
        >
          <option value="0">All</option>
          <option value="3">3 ⭐ & above</option>
          <option value="4">4 ⭐ & above</option>
          <option value="5">5 ⭐</option>
        </select>
      </div>

      {/* Property Type */}
      <div>
        <label>Property Type</label>
        <select
          value={filters.type}
          onChange={(e) => handleChange("type", e.target.value)}
        >
          <option value="">All</option>
          <option value="Hotel">Hotel</option>
          <option value="Resort">Resort</option>
          <option value="Apartment">Apartment</option>
        </select>
      </div>

      {/* Amenities */}
      <div>
        <label>Amenities</label>
        {amenitiesList.map((a) => (
          <div key={a}>
            <input
              type="checkbox"
              checked={filters.amenities.includes(a)}
              onChange={() => toggleAmenity(a)}
            />
            <span style={{ marginLeft: 5 }}>{a.toUpperCase()}</span>
          </div>
        ))}
      </div>

      {/* Sorting */}
      <div>
        <label>Sort By</label>
        <select
          value={filters.sort}
          onChange={(e) => handleChange("sort", e.target.value)}
        >
          <option value="">None</option>
          <option value="priceLow">Price: Low → High</option>
          <option value="priceHigh">Price: High → Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
  );
}
