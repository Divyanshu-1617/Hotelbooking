const hotelsData = [
  {
    id: 1,
    name: "Grand Palace Resort",
    city: "Goa",
    price: 4500,
    rating: 4.6,
    reviews: 820,
    amenities: ["wifi", "pool", "parking", "ac"],
    type: "Resort",
    images: [
      "https://picsum.photos/400/250?1",
      "https://picsum.photos/400/250?2",
    ],
    rooms: [
      { type: "Deluxe", price: 4500 },
      { type: "Suite", price: 7500 },
    ],
  },
  {
    id: 2,
    name: "City View Hotel",
    city: "Delhi",
    price: 3200,
    rating: 4.1,
    reviews: 430,
    amenities: ["wifi", "parking", "ac"],
    type: "Hotel",
    images: [
      "https://picsum.photos/400/250?3",
      "https://picsum.photos/400/250?4",
    ],
    rooms: [{ type: "Standard", price: 3200 }],
  },
  {
    id: 3,
    name: "Ocean Breeze Apartments",
    city: "Mumbai",
    price: 2800,
    rating: 3.9,
    reviews: 210,
    amenities: ["wifi"],
    type: "Apartment",
    images: [
      "https://picsum.photos/400/250?5",
      "https://picsum.photos/400/250?6",
    ],
    rooms: [{ type: "Studio", price: 2800 }],
  },
];

export default hotelsData;
