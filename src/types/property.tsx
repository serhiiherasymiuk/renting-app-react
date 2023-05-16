import { Rating } from "./rating";

export interface Property {
  id: number;
  title: string;
  address: string;
  photo: string;
  ratings: Rating[];
}
