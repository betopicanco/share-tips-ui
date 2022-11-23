import IAuthor from "interfaces/user/IAuthor";
import api from "./api";

export default class UserService {
  private baseUrl = "users/";

  public async findAll(): Promise<IAuthor[]> {
    const { data: authors } = await api.get(this.baseUrl);

    return authors;
  }

  public async findById(id: number | string): Promise<IAuthor> {
    const { data: author } = await api.get(this.baseUrl + id);

    return author;
  }
}
