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
      { id: 4, rate: 4 },
      { id: 5, rate: 4 },
    ],
    date: new Date("2023-05-22"),
  },
  {
    id: 2,
    title: "Beachfront Condo",
    address: "456 Ocean Avenue",
    photo:
      "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ratings: [{ id: 6, rate: 5 }],
    date: new Date("2023-05-21"),
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
    date: new Date("2023-05-20"),
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
    date: new Date("2023-05-19"),
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
      { id: 16, rate: 4 },
    ],
    date: new Date("2023-05-18"),
  },
  {
    id: 6,
    title: "Rustic Cabin",
    address: "890 Woodland Drive",
    photo:
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ratings: [
      { id: 17, rate: 5 },
      { id: 18, rate: 3 },
      { id: 19, rate: 3 },
      { id: 20, rate: 3 },
    ],
    date: new Date(),
  },
  {
    id: 7,
    title: "Lakefront Retreat",
    address: "111 Lakeside Drive",
    photo:
      "https://images.pexels.com/photos/3555615/pexels-photo-3555615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ratings: [
      { id: 21, rate: 5 },
      { id: 22, rate: 4 },
      { id: 23, rate: 4 },
      { id: 24, rate: 3 },
    ],
    date: new Date("2023-05-17"),
  },
  {
    id: 8,
    title: "Modern Apartment",
    address: "222 Park Avenue",
    photo:
      "https://images.pexels.com/photos/259646/pexels-photo-259646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ratings: [
      { id: 25, rate: 5 },
      { id: 26, rate: 4 },
      { id: 27, rate: 4 },
      { id: 28, rate: 4 },
      { id: 29, rate: 3 },
    ],
    date: new Date("2023-05-16"),
  },
  {
    id: 9,
    title: "Country Farmhouse",
    address: "333 Meadow Lane",
    photo:
      "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ratings: [
      { id: 30, rate: 5 },
      { id: 31, rate: 5 },
      { id: 32, rate: 4 },
      { id: 33, rate: 4 },
      { id: 34, rate: 4 },
    ],
    date: new Date("2023-05-15"),
  },
  {
    id: 10,
    title: "Ski Chalet",
    address: "444 Snowy Peaks",
    photo:
      "https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ratings: [
      { id: 35, rate: 5 },
      { id: 36, rate: 5 },
      { id: 37, rate: 5 },
      { id: 38, rate: 4 },
      { id: 39, rate: 4 },
      { id: 40, rate: 3 },
    ],
    date: new Date("2023-05-14"),
  },
  {
    id: 11,
    title: "Modern Loft",
    address: "777 Loft Street",
    photo:
      "https://images.pexels.com/photos/210538/pexels-photo-210538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ratings: [
      { id: 52, rate: 4 },
      { id: 53, rate: 4 },
      { id: 54, rate: 4 },
      { id: 55, rate: 4 },
    ],
    date: new Date("2023-05-11"),
  },
  {
    id: 12,
    title: "Historic Manor",
    address: "888 Heritage Lane",
    photo:
      "https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ratings: [
      { id: 56, rate: 5 },
      { id: 57, rate: 5 },
      { id: 58, rate: 4 },
      { id: 59, rate: 4 },
      { id: 60, rate: 4 },
    ],
    date: new Date("2023-05-10"),
  },
  {
    id: 13,
    title: "Luxury Penthouse",
    address: "999 High Street",
    photo:
      "https://images.pexels.com/photos/460695/pexels-photo-460695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ratings: [
      { id: 61, rate: 5 },
      { id: 62, rate: 5 },
      { id: 63, rate: 5 },
      { id: 64, rate: 4 },
    ],
    date: new Date("2023-05-09"),
  },
  {
    id: 14,
    title: "Countryside Retreat",
    address: "111 Countryside Lane",
    photo:
      "https://images.pexels.com/photos/5071179/pexels-photo-5071179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ratings: [
      { id: 65, rate: 4 },
      { id: 66, rate: 4 },
      { id: 67, rate: 4 },
    ],
    date: new Date("2023-05-08"),
  },
  {
    id: 15,
    title: "Elegant Townhouse",
    address: "222 Elm Street",
    photo:
      "https://images.pexels.com/photos/3786322/pexels-photo-3786322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ratings: [
      { id: 68, rate: 5 },
      { id: 69, rate: 5 },
      { id: 70, rate: 4 },
      { id: 71, rate: 4 },
      { id: 72, rate: 4 },
    ],
    date: new Date("2023-05-07"),
  },
  {
    id: 16,
    title: "Riverside Cottage",
    address: "333 River Road",
    photo:
      "https://images.pexels.com/photos/6267583/pexels-photo-6267583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ratings: [
      { id: 73, rate: 5 },
      { id: 74, rate: 5 },
      { id: 75, rate: 5 },
      { id: 76, rate: 4 },
    ],
    date: new Date("2023-05-06"),
  },
];

export default properties;
