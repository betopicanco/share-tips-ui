import ISubject from "interfaces/ISubject";
import ITip from "interfaces/ITip";
import api from "./api";

export interface ITipCreateData {
  authorId: number,
  title: string,
  content: string
}

export default class TipService {
  private baseUrl = "tips/";

  public async findAll(): Promise<ITip[]> {
    const { data: tips } = await api.get(this.baseUrl);

    return tips;
  }

  public async findById(id: number | string): Promise<ITip> {
    const { data: tip } = await api.get(this.baseUrl + id);

    return tip;
  }

  public async findByAuthor(authorId: number | string): Promise<ITip[]> {
    const { data: tips } = await api.get(
      `${this.baseUrl}find-by-author/${authorId}`
    );

    return tips;
  }

  public async searchByParamAndTerm(
    param: string,
    term: string
  ): Promise<ITip[]> {
    const { data: tips } = await api.get(
      `${this.baseUrl}search?param=${param}&term=${term}`
    );

    return tips;
  }

  public async register(data: ITipCreateData): Promise<ITip> {
    const { data: tip } = await api.post(this.baseUrl, data);

    return tip;
  }

  public async addSubjects(tipId: number, subjects: ISubject[]): Promise<ITip> {
    const { data: tip } = await api.put(`/tips/${tipId}/add-subjects`, subjects);

    return tip;
  }
}
