import { IArticle } from "./article";

export interface IUser {
  id: number;
  name: string;
  surname: string;
  articles: IArticle[];
  photo: string;
}
