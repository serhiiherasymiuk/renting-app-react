import { Property } from "../types/property";

const mockData: Property[] = [
  {
    id: 1,
    title: "Luxury Villa",
    address: "123 Main Street",
    photo: "https://example.com/photos/1.jpg",
    ratings: [
      { id: 1, rate: 4 },
      { id: 2, rate: 5 },
      { id: 3, rate: 3 },
    ],
  },
  {
    id: 2,
    title: "Beachfront Condo",
    address: "456 Ocean Avenue",
    photo: "https://example.com/photos/2.jpg",
    ratings: [
      { id: 4, rate: 4 },
      { id: 5, rate: 4 },
      { id: 6, rate: 5 },
    ],
  },
  {
    id: 3,
    title: "Cozy Cottage",
    address: "789 Forest Lane",
    photo: "https://example.com/photos/3.jpg",
    ratings: [
      { id: 7, rate: 5 },
      { id: 8, rate: 3 },
      { id: 9, rate: 4 },
    ],
  },
  {
    id: 4,
    title: "Mountain Retreat",
    address: "321 Summit Road",
    photo: "https://example.com/photos/4.jpg",
    ratings: [
      { id: 10, rate: 5 },
      { id: 11, rate: 5 },
      { id: 12, rate: 4 },
    ],
  },
  {
    id: 5,
    title: "Urban Loft",
    address: "567 City Avenue",
    photo: "https://example.com/photos/5.jpg",
    ratings: [
      { id: 13, rate: 4 },
      { id: 14, rate: 4 },
      { id: 15, rate: 3 },
    ],
  },
  {
    id: 6,
    title: "Rustic Cabin",
    address: "890 Woodland Drive",
    photo: "https://example.com/photos/6.jpg",
    ratings: [
      { id: 16, rate: 3 },
      { id: 17, rate: 5 },
      { id: 18, rate: 3 },
    ],
  },
];

export default mockData;
