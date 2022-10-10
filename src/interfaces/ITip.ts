import IAuthor from "./IAuthor";
import ISubject from "./ISubject";

export default interface ITip {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  author: IAuthor;
  subjects: ISubject[];
}
