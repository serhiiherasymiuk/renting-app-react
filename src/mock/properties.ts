import { IProperty } from "../types/property";

let properties: IProperty[] = [
  {
    id: 1,
    title: "Luxury Villa",
    address: "123 Main Street",
    photo:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ratings: [
      { id: 1, rate: 1 },
      { id: 2, rate: 1 },
      { id: 3, rate: 3 },
    ],
  },
  {
    id: 2,
    title: "Beachfront Condo",
    address: "456 Ocean Avenue",
    photo:
      "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    photo:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    photo:
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    photo:
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    photo:
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ratings: [
      { id: 16, rate: 4 },
      { id: 17, rate: 5 },
      { id: 18, rate: 3 },
    ],
  },
];

export default properties;
