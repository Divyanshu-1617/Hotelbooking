const hotelsData = [
  {
    id: 1,
    name: "Grand Palace Resort",
    city: "Goa",
    price: 4500,
    rating: 4.6,
    reviews: 820,
    type: "Resort",

    maxGuests: 4,
    availableFrom: "2024-05-01",
    availableTo: "2024-12-31",

    amenities: ["wifi", "pool", "parking", "ac"],

    images: [
      "https://picsum.photos/400/250?1",
      "https://picsum.photos/400/250?2",
    ],

    rooms: [
      {
        type: "Deluxe",
        price: 4500,
        maxGuests: 2,
      },
      {
        type: "Suite",
        price: 7500,
        maxGuests: 4,
      },
    ],
  },

  {
    id: 2,
    name: "City View Hotel",
    city: "Delhi",
    price: 3200,
    rating: 4.1,
    reviews: 430,
    type: "Hotel",

    maxGuests: 3,
    availableFrom: "2024-04-01",
    availableTo: "2024-11-30",

    amenities: ["wifi", "parking", "ac"],

    images: [
      "https://picsum.photos/400/250?3",
      "https://picsum.photos/400/250?4",
    ],

    rooms: [
      {
        type: "Standard",
        price: 3200,
        maxGuests: 2,
      },
      {
        type: "Executive",
        price: 4800,
        maxGuests: 3,
      },
    ],
  },

  {
    id: 3,
    name: "Ocean Breeze Apartments",
    city: "Mumbai",
    price: 2800,
    rating: 3.9,
    reviews: 210,
    type: "Apartment",

    maxGuests: 2,
    availableFrom: "2024-01-01",
    availableTo: "2024-12-31",

    amenities: ["wifi"],

    images: [
      "https://picsum.photos/400/250?5",
      "https://picsum.photos/400/250?6",
    ],

    rooms: [
      {
        type: "Studio",
        price: 2800,
        maxGuests: 2,
      },
    ],
  },
];

export default hotelsData;
