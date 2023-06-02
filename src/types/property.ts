import { IRating } from "./rating";

export interface IProperty {
  id: number;
  title: string;
  address: string;
  photo: string;
  ratings: IRating[];
  date: Date;
  text: string;
}
