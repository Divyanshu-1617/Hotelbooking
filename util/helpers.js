// Filter hotels based on selected filters
export function filterHotels(hotels, filters) {
  let result = [...hotels];

  // Price filter
  if (filters.price) {
    result = result.filter(hotel => hotel.price <= filters.price);
  }

  // Rating filter
  if (filters.rating) {
    result = result.filter(hotel => hotel.rating >= filters.rating);
  }

  // Property type filter
  if (filters.type) {
    result = result.filter(hotel => hotel.type === filters.type);
  }

  // Amenities filter
  if (filters.amenities && filters.amenities.length > 0) {
    result = result.filter(hotel =>
      filters.amenities.every(a => hotel.amenities.includes(a))
    );
  }

  return result;
}

// Sort hotels
export function sortHotels(hotels, sortType) {
  const sorted = [...hotels];

  switch (sortType) {
    case "priceLow":
      return sorted.sort((a, b) => a.price - b.price);

    case "priceHigh":
      return sorted.sort((a, b) => b.price - a.price);

    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);

    default:
      return hotels;
  }
}

// Calculate number of nights between two dates
export function calculateNights(checkIn, checkOut) {
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diffTime = end - start;
  return Math.max(diffTime / (1000 * 60 * 60 * 24), 1);
}

// Price breakdown for booking
export function calculatePrice(basePrice, nights) {
  const subtotal = basePrice * nights;
  const tax = subtotal * 0.12; // 12% GST
  const total = subtotal + tax;

  return {
    subtotal,
    tax,
    total,
  };
}

// Format currency
export function formatCurrency(amount) {
  return `₹${amount.toLocaleString("en-IN")}`;
}
